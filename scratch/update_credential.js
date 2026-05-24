const N8N_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOWQyY2QyZC1mNDg0LTQ4NzUtOGZhYi05MTcxODg4NjRlMDEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMDQ3NzJlZTItYTMyYi00MDU0LTljOTMtOTAzMzJkNDE5ZDNlIiwiaWF0IjoxNzc5MTU0NDU4fQ.XrDgV8peKAqfHGnkMD2GtP72cCnSLNFY_VWdAa10USM";
const CRED_ID = "Hznf2ZMg4wObho4L";

const ACCESS_TOKEN = "IGAAN3hbbWZBmtBZAFk0d2w2aHpPclV1RDFLdEZAzWEVGQzgyNDRwbXJwdnE2bXpHd0VFakstY0hpSEQzZA3ZAteUM1RW9neGN2TUZA0VVBOcTRJYVlIbXJhcUVwblliS3dsZAGFfbXBscFB4NjBUdHhiVWRKaGtUdTJhS0F3SjhhaVRuZAwZDZD";

async function main() {
  const url = `https://n8n.centrodetutorias.com/api/v1/credentials/${CRED_ID}`;
  console.log(`Actualizando credencial ${CRED_ID}...`);
  
  const payload = {
    name: "Meta Page Access Token",
    type: "httpQueryAuth",
    data: {
      name: "access_token",
      value: ACCESS_TOKEN
    }
  };

  try {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        "X-N8N-API-KEY": N8N_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });
    console.log(`Status de actualización: ${res.status}`);
    const data = await res.json();
    console.log("Respuesta:");
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error al actualizar:", err);
  }
}

main();
