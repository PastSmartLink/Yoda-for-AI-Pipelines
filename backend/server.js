
const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/results', (req, res) => {
    const results = [];
    fs.createReadStream('C:/Users/johnt/Desktop/Yoda-Widget-Code-for-AI-Pipelines-V1/backend/output/cordis_results.csv')
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => {
            results.push({
                GrantTitle: data['Title'] || 'N/A',
                Deadline: data['Project end date'] || 'N/A',
                Funding: data['Funding'] || 'N/A',
                Description: data['Teaser'] || 'N/A',
                Link: data['URL'] || '#'
            });
        })
        .on('end', () => {
            res.json(results);
        })
        .on('error', (err) => {
            console.error('Error reading CSV:', err);
            res.status(500).json({ error: 'Failed to parse CSV file' });
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
