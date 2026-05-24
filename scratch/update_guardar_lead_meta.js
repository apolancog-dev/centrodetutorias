const fs = require('fs');

const N8N_API_URL = "https://n8n.centrodetutorias.com/api/v1/workflows/o7SJolS5MlkeEUWV";
const N8N_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOWQyY2QyZC1mNDg0LTQ4NzUtOGZhYi05MTcxODg4NjRlMDEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMDQ3NzJlZTItYTMyYi00MDU0LTljOTMtOTAzMzJkNDE5ZDNlIiwiaWF0IjoxNzc5MTU0NDU4fQ.XrDgV8peKAqfHGnkMD2GtP72cCnSLNFY_VWdAa10USM";

const workflowPath = "/Users/antoniopolanco/Library/CloudStorage/GoogleDrive-apolancog@gmail.com/Mi unidad/NEGOCIOS/CENTRO DE TUTORIAS/CETU AGENT/n8n/guardar_lead_meta.json";

try {
  const workflowRaw = fs.readFileSync(workflowPath, 'utf8');
  const workflowData = JSON.parse(workflowRaw);

  const payload = {
    name: workflowData.name || "Guardar Lead desde Meta",
    nodes: workflowData.nodes || [],
    connections: workflowData.connections || {},
    settings: workflowData.settings || {}
  };

  console.log("Enviando petición PUT a la API de n8n para actualizar Guardar Lead desde Meta...");

  fetch(N8N_API_URL, {
    method: 'PUT',
    headers: {
      "X-N8N-API-KEY": N8N_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(res => {
    console.log(`Código de respuesta HTTP: ${res.status}`);
    return res.json();
  })
  .then(data => {
    console.log("Respuesta de n8n:");
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(err => {
    console.error("Error en fetch:", err);
  });

} catch (e) {
  console.error("Error al procesar:", e);
}
