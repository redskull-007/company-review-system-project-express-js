const Review = require('../models/Review');

const addReview = async (req, res) => {
    try {
        const { companyName, pros, cons, rating } = req.body;
        const newReview = await Review.create({ companyName, pros, cons, rating });
        res.status(200).send('Review added successfully');
    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).send('Error adding review to the database');
    }
};

module.exports = { addReview };
