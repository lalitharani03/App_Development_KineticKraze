const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(cors());

app.get('/api/v1/dietplan/:goal', (req, res) => {
  const goal = req.params.goal;
  const filePath = path.join(__dirname, 'dietPlans.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading diet plan data' });
    }
    
    const dietPlans = JSON.parse(data);
    res.json(dietPlans[goal] || {});
  });
});

app.listen(8082, () => {
    console.log("Listening on port 8082...");
});
