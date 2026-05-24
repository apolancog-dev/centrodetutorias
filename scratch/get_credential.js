const N8N_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOWQyY2QyZC1mNDg0LTQ4NzUtOGZhYi05MTcxODg4NjRlMDEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMDQ3NzJlZTItYTMyYi00MDU0LTljOTMtOTAzMzJkNDE5ZDNlIiwiaWF0IjoxNzc5MTU0NDU4fQ.XrDgV8peKAqfHGnkMD2GtP72cCnSLNFY_VWdAa10USM";
const CRED_ID = "Hznf2ZMg4wObho4L";

async function main() {
  const url = `https://n8n.centrodetutorias.com/api/v1/credentials/${CRED_ID}`;
  console.log(`Buscando credencial ${CRED_ID}...`);
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        "X-N8N-API-KEY": N8N_API_KEY
      }
    });
    console.log(`Status: ${res.status}`);
    const data = await res.json();
    console.log("Datos de la credencial:");
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
}

main();
