const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');

const app = express();
const port = process.env.PORT || 3001;

// Serve React app
app.use(serveStatic(path.join(__dirname, 'build')));

// Serve JSON file
app.use('/db.json', express.static(path.join(__dirname, 'public/db.json')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
