import json
import requests
import sys

N8N_API_URL = "https://n8n.centrodetutorias.com/api/v1/workflows"
N8N_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmOWQyY2QyZC1mNDg0LTQ4NzUtOGZhYi05MTcxODg4NjRlMDEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwianRpIjoiMDQ3NzJlZTItYTMyYi00MDU0LTljOTMtOTAzMzJkNDE5ZDNlIiwiaWF0IjoxNzc5MTU0NDU4fQ.XrDgV8peKAqfHGnkMD2GtP72cCnSLNFY_VWdAa10USM"

workflow_path = "/Users/antoniopolanco/Library/CloudStorage/GoogleDrive-apolancog@gmail.com/Mi unidad/NEGOCIOS/CENTRO DE TUTORIAS/CETU AGENT/n8n/lucia_meta_agent.json"

try:
    with open(workflow_path, "r", encoding="utf-8") as f:
        workflow_data = json.load(f)
except Exception as e:
    print(f"Error al abrir archivo JSON: {e}")
    sys.exit(1)

# En n8n API, al crear un workflow se manda un objeto con { name, nodes, connections, settings, active }
payload = {
    "name": workflow_data.get("name", "LucIA Meta Agent"),
    "nodes": workflow_data.get("nodes", []),
    "connections": workflow_data.get("connections", {}),
    "settings": workflow_data.get("settings", {}),
    "active": workflow_data.get("active", False)
}

headers = {
    "X-N8N-API-KEY": N8N_API_KEY,
    "Content-Type": "application/json"
}

print("Enviando petición a la API de n8n...")
response = requests.post(N8N_API_URL, headers=headers, json=payload)

print(f"Código de respuesta HTTP: {response.status_code}")
try:
    res_json = response.json()
    print("Respuesta de n8n:")
    print(json.dumps(res_json, indent=2))
except Exception as e:
    print("Respuesta cruda de n8n:")
    print(response.text)
