const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { addReview } = require('./controllers/reviewController');
const { searchReviews } = require('./controllers/searchController');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.post('/addReview', addReview);
app.get('/getReviews/:companyName', searchReviews);

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
