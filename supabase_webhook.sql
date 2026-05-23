-- Script para crear los Webhooks automáticos en Supabase

-- 1. Habilitar extensión pg_net (necesaria para hacer peticiones HTTP desde Postgres)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- =====================================================================
-- WEBHOOK A: REGISTRO DE LEADS DEL CHATBOT
-- =====================================================================

-- 2. Crear la función que hará la petición POST a n8n ante leads
CREATE OR REPLACE FUNCTION notify_n8n_on_lead()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://n8n.centrodetutorias.com/webhook/supabase-leads',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'type', 'INSERT', 
      'table', 'leads', 
      'record', row_to_json(NEW)
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 3. Crear el Trigger en la tabla leads para que se ejecute después de cada INSERT
DROP TRIGGER IF EXISTS trigger_notify_n8n_on_lead ON public.leads;
CREATE TRIGGER trigger_notify_n8n_on_lead
AFTER INSERT ON public.leads
FOR EACH ROW
EXECUTE FUNCTION notify_n8n_on_lead();


-- =====================================================================
-- WEBHOOK B: REGISTRO DE SOLICITUDES DE TUTORÍAS (DASHBOARD)
-- =====================================================================

-- 4. Crear la función que hará la petición POST a n8n ante solicitudes de tutoría
CREATE OR REPLACE FUNCTION notify_n8n_on_tutoring_request()
RETURNS TRIGGER AS $$
DECLARE
  user_email TEXT;
  user_phone TEXT;
BEGIN
  -- Obtener el email y teléfono del usuario asociado
  SELECT email, phone INTO user_email, user_phone FROM public.users WHERE id = NEW.user_id;

  PERFORM net.http_post(
    url := 'https://n8n.centrodetutorias.com/webhook/supabase-tutoring-requests',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := json_build_object(
      'type', 'INSERT', 
      'table', 'tutoring_requests', 
      'record', row_to_json(NEW),
      'user_email', user_email,
      'user_phone', user_phone
    )::jsonb
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 5. Crear el Trigger en la tabla tutoring_requests
DROP TRIGGER IF EXISTS trigger_notify_n8n_on_tutoring_request ON public.tutoring_requests;
CREATE TRIGGER trigger_notify_n8n_on_tutoring_request
AFTER INSERT ON public.tutoring_requests
FOR EACH ROW
EXECUTE FUNCTION notify_n8n_on_tutoring_request();
