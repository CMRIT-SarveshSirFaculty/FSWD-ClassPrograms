// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
// Serve static files from the 'public' folder
app.use(express.static('public'));
// Alternatively, you can define routes to send specific HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});                        
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
// 404 handler for unmatched routes
app.use((req, res) => {
  res.status(404).send('Page not found');
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
