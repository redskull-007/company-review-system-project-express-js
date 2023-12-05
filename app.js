const express = require('express');
const path = require('path');
const indexRoute = require('./routes/index');

const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the index route for the root URL
app.use('/', indexRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});