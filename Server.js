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
