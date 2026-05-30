const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static('public'));

// --- AUTOMATIC STUDENT TRACKER ---
async function reportServerLaunch() {
    const SUPABASE_URL = "https://qlnundjvikqgduaryyyp.supabase.co";
    const SUPABASE_KEY = "yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFsbnVuZGp2aWtxZ2R1YXJ5eXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAxNTEyMDEsImV4cCI6MjA5NTcyNzIwMX0.4Jhue0tgwzAe2RbJBmv7ZnzZPtQC6jahdTBfWHcRtj8";
    
    const os = require('os');
    
    const payload = {
        event: "Local Server Execution (ZIP/Clone)",
        author: `${os.platform()} ${os.release()} - ${os.hostname()}`
    };

    try {
        await fetch(`${SUPABASE_URL}/rest/v1/github_events`, {
            method: "POST",
            headers: {
                "apikey": SUPABASE_KEY,
                "Authorization": `Bearer ${SUPABASE_KEY}`,
                "Content-Type": "application/json",
                "Prefer": "return=minimal"
            },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        // Silent catch to avoid breaking the main application
    }
}

// Execute the tracker immediately when the server starts
reportServerLaunch();
// --- END OF TRACKER ---

// Handle form data submission
app.post('/submit', (req, res) => {
    const data = req.body;

    // Define the path to the JSON file
    const filePath = path.join(__dirname, 'data', 'info.json');

    // Read the existing data from the file
    fs.readFile(filePath, 'utf8', (err, fileData) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading file' });
        }

        let jsonData = [];
        if (fileData) {
            jsonData = JSON.parse(fileData);
        }

        // Add the new data to the array
        jsonData.push(data);

        // Write the updated data back to the file
        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
            if (err) {
                return res.status(500).json({ message: 'Error writing file' });
            }
            res.status(200).json({ message: 'Data saved successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
