const express = require('express');
const path = require('path');
const jsonServer = require('json-server');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'build')));


const router = jsonServer.router('db.json'); 
app.use('/api', router); 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
