const N8N_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOWQyY2QyZC1mNDg0LTQ4NzUtOGZhYi05MTcxODg4NjRlMDEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMDQ3NzJlZTItYTMyYi00MDU0LTljOTMtOTAzMzJkNDE5ZDNlIiwiaWF0IjoxNzc5MTU0NDU4fQ.XrDgV8peKAqfHGnkMD2GtP72cCnSLNFY_VWdAa10USM";

const workflowIds = [
  "4qbRhUX2fiwxweGM", // LucIA Meta Agent
  "o7SJolS5MlkeEUWV"  // Guardar Lead desde Meta
];

async function activateWorkflow(id) {
  const url = `https://n8n.centrodetutorias.com/api/v1/workflows/${id}/activate`;
  console.log(`Activando workflow ${id}...`);
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        "X-N8N-API-KEY": N8N_API_KEY
      }
    });
    console.log(`Status de ${id}: ${res.status}`);
    const data = await res.json();
    console.log(`Respuesta para ${id}:`, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error(`Error al activar ${id}:`, err);
  }
}

async function main() {
  for (const id of workflowIds) {
    await activateWorkflow(id);
  }
}

main();
