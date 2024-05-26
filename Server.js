const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit', (req, res) => {
    const formData = req.body;
    const filePath = path.join(__dirname, 'public', 'data', 'info.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            console.error('Error reading file', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        let jsonData = {};
        if (!err) {
            jsonData = JSON.parse(data);
        }

        jsonData[formData.section] = {
            ...jsonData[formData.section],
            ...formData,
        };

        fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                console.error('Error writing file', err);
                res.status(500).send('Internal Server Error');
            } else {
                res.send('Data saved successfully');
            }
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


