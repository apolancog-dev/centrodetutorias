# Configurar Credenciales Gmail + Google Calendar en n8n

Para que el workflow **"Chief of Staff — Daily Brief"** funcione completamente, 
necesitas conectar tu cuenta de Google. Estos son los pasos exactos:

---

## Paso 1 — Abrir n8n

Ve a: https://n8n.centrodetutorias.com

---

## Paso 2 — Crear Credencial Gmail

1. En el menú lateral, ve a **Settings → Credentials**
2. Haz clic en **+ Add Credential**
3. Busca y selecciona **Gmail OAuth2 API**
4. Ponle de nombre: `Gmail Antonio Polanco`
5. Haz clic en **Connect my account** → se abrirá Google OAuth
6. Autoriza con la cuenta **apolancog@gmail.com**
7. Haz clic en **Save**

---

## Paso 3 — Crear Credencial Google Calendar

1. En **Settings → Credentials**, haz clic en **+ Add Credential** otra vez
2. Busca y selecciona **Google Calendar OAuth2 API**
3. Ponle de nombre: `Google Calendar Antonio Polanco`
4. Haz clic en **Connect my account** → se abrirá Google OAuth
5. Autoriza con la cuenta **apolancog@gmail.com**
6. Haz clic en **Save**

---

## Paso 4 — Conectar las credenciales al workflow

1. Ve al workflow **"Chief of Staff — Daily Brief"**
2. Haz clic en el nodo **"Gmail — Get Today Emails"**
3. En el campo **Credential**, selecciona `Gmail Antonio Polanco`
4. Haz clic en el nodo **"Calendar — Get Today Events"**
5. En el campo **Credential**, selecciona `Google Calendar Antonio Polanco`
6. Guarda el workflow (Ctrl+S)

---

## Paso 5 — Activar el workflow

Haz clic en el toggle **Active** (arriba a la derecha del workflow) para activarlo.

El workflow correrá automáticamente **cada día hábil a las 7:30 AM Guatemala**.

---

## Verificar que funciona

Para probar manualmente:
1. Abre el workflow
2. Haz clic en **"Execute Workflow"** (botón ▶️)
3. El brief aparecerá como Issue en Paperclip

---

> **Tiempo estimado:** 5-8 minutos para completar los pasos de OAuth
