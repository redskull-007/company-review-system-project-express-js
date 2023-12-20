const Review = require('../models/Review');

const searchReviews = async (req, res) => {
    try {
        const companyName = req.params.companyName;
        const reviews = await Review.findAll({ where: { companyName } });
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).send('Error fetching reviews from the database');
    }
};

module.exports = { searchReviews };
