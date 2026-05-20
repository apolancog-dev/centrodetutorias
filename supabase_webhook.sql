-- Script para crear el Webhook en Supabase

-- 1. Habilitar extensión pg_net (necesaria para hacer peticiones HTTP desde Postgres)
CREATE EXTENSION IF NOT EXISTS pg_net;

-- 2. Crear la función que hará la petición POST a n8n
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
