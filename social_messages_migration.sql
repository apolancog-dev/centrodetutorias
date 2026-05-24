-- =====================================================================
-- MIGRACIÓN DE TABLA DE MENSAJES DE WHATSAPP A ESTRUCTURA MULTICANAL
-- =====================================================================
-- Ejecuta este script en el SQL Editor de tu proyecto de Supabase para
-- expandir la base de datos de manera completamente retrocompatible.

-- 1. Agregar la columna 'channel' si no existe
ALTER TABLE public.whatsapp_messages 
ADD COLUMN IF NOT EXISTS channel TEXT DEFAULT 'whatsapp' CHECK (channel IN ('whatsapp', 'instagram', 'facebook', 'chatbot'));

-- 2. Agregar la columna 'ghl_contact_id' si no existe (para trazabilidad con GoHighLevel)
ALTER TABLE public.whatsapp_messages 
ADD COLUMN IF NOT EXISTS ghl_contact_id TEXT;

-- 3. Agregar la columna 'metadata' si no existe (para payloads crudos o IDs de Meta)
ALTER TABLE public.whatsapp_messages 
ADD COLUMN IF NOT EXISTS metadata JSONB;

-- 4. Re-crear el índice para optimizar consultas agregando la columna 'channel'
DROP INDEX IF EXISTS public.idx_wa_messages_phone_time;
CREATE INDEX IF NOT EXISTS idx_social_messages_channel_phone ON public.whatsapp_messages (channel, phone, created_at DESC);

-- 5. Confirmar que Supabase Realtime sigue habilitado para la tabla whatsapp_messages
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM pg_publication_tables 
        WHERE pubname = 'supabase_realtime' 
        AND schemaname = 'public' 
        AND tablename = 'whatsapp_messages'
    ) THEN
        NULL;
    ELSE
        ALTER PUBLICATION supabase_realtime ADD TABLE public.whatsapp_messages;
    END IF;
END $$;

-- 6. Agregar comentario descriptivo a la tabla
COMMENT ON TABLE public.whatsapp_messages IS 'Almacena historial de chats multicanal (WhatsApp, Instagram, Facebook y Chatbot) con soporte realtime y RLS.';
