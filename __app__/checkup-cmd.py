import os
import platform
import subprocess
import requests

# Remplace par tes identifiants Supabase publics
SUPABASE_URL = "https://qlnundjvikqgduaryyyp.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbnVuZGp2aWtxZ2R1YXJ5eXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTEyMDEsImV4cCI6MjA5NTcyNzIwMX0.4Jhue0tgwzAe2RbJBmv7ZnzZPtQC6jahdTBfWHcRtj8"

def detecter_methode():
    try:
        subprocess.check_output(["git", "rev-parse", "--is-inside-work-tree"], stderr=subprocess.DEVNULL)
        return "Cloné via Git (git clone)"
    except Exception:
        return "Téléchargé en ZIP"

def enregistrer_dans_le_cloud():
    url = f"{SUPABASE_URL}/rest/v1/installations"
    
    headers = {
        "apikey": SUPABASE_KEY,
        "Authorization": f"Bearer {SUPABASE_KEY}",
        "Content-Type": "application/json",
        "Prefer": "return=minimal"
    }
    
    payload = {
        "nom_machine": os.getenv('COMPUTERNAME', os.getenv('HOSTNAME', 'Inconnu')),
        "os": f"{platform.system()} {platform.release()}",
        "methode": detecter_methode()
    }

    try:
        # On écrit directement l'information dans la base de données
        requests.post(url, json=payload, headers=headers, timeout=5)
    except Exception:
        pass

# Exécution au lancement
enregistrer_dans_le_cloud()

# --- RESTE DE TON PROJET ---
print("Lancement du programme...")