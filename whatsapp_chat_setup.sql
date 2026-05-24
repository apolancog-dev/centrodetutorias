-- =====================================================================
-- CONFIGURACIÓN DE TABLA DE MENSAJES DE WHATSAPP (LIVE CHAT)
-- =====================================================================
-- Ejecuta este script en el SQL Editor de tu proyecto de Supabase.

-- 1. Crear la tabla de mensajes si no existe
CREATE TABLE IF NOT EXISTS public.whatsapp_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    phone TEXT NOT NULL,
    name TEXT,
    direction TEXT NOT NULL CHECK (direction IN ('inbound', 'outbound')),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Crear índices optimizados para velocidad en consultas
CREATE INDEX IF NOT EXISTS idx_wa_messages_phone_time ON public.whatsapp_messages (phone, created_at DESC);

-- 3. Habilitar Seguridad a Nivel de Fila (RLS)
ALTER TABLE public.whatsapp_messages ENABLE ROW LEVEL SECURITY;

-- 4. Eliminar políticas previas si existen
DROP POLICY IF EXISTS "Permitir a administradores ver mensajes de whatsapp" ON public.whatsapp_messages;
DROP POLICY IF EXISTS "Permitir a administradores insertar mensajes de whatsapp" ON public.whatsapp_messages;
DROP POLICY IF EXISTS "Permitir a administradores control total" ON public.whatsapp_messages;

-- 5. Crear políticas para restringir el acceso únicamente al rol 'admin'
-- Nota: is_admin(auth.uid()) verifica si el usuario autenticado es administrador
CREATE POLICY "Permitir a administradores control total"
    ON public.whatsapp_messages
    FOR ALL
    TO authenticated
    USING (public.is_admin(auth.uid()))
    WITH CHECK (public.is_admin(auth.uid()));

-- 6. Habilitar Supabase Realtime para la tabla whatsapp_messages
-- Esto permite el streaming de cambios en tiempo real al frontend
-- Nota: Si da un error diciendo que la tabla ya está en la publicación, puedes ignorarlo.
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
