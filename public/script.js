function addReview() {
    const companyName = document.getElementById('companyName').value;
    const pros = document.getElementById('pros').value;
    const cons = document.getElementById('cons').value;
    const rating = parseInt(document.getElementById('rating').value);

    if (!companyName || !pros || !cons || isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please fill in all fields and provide a valid rating (1-5 stars).");
        return;
    }

    const review = {
        companyName,
        pros,
        cons,
        rating
    };

    // You can use the fetch API to send the review data to the server
    // For simplicity, let's assume the server endpoint is "/addReview"

    fetch('/addReview', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(response => response.text())
    .then(message => {
        alert(message);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error adding review. Please try again.');
    });

    // Clear form fields
    document.getElementById('companyName').value = '';
    document.getElementById('pros').value = '';
    document.getElementById('cons').value = '';
    document.getElementById('rating').value = 0;
}

function searchReviews() {
    const companyName = document.getElementById('searchCompany').value;

    // You can use the fetch API to request reviews from the server
    // For simplicity, let's assume the server endpoint is "/getReviews/:companyName"

    fetch(`/getReviews/${companyName}`)
    .then(response => response.json())
    .then(reviews => {
        if (reviews.length === 0) {
            alert(`No reviews found for ${companyName}.`);
        } else {
            let result = `Reviews for ${companyName}:\n\n`;
            reviews.forEach(review => {
                result += `Pros: ${review.pros}\nCons: ${review.cons}\nRating: ${review.rating} stars\n\n`;
            });
            alert(result);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error fetching reviews. Please try again.');
    });

    // Clear search field
    document.getElementById('searchCompany').value = '';
}

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.star-rating span');
    let userRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', function () {
            userRating = index + 1;
            highlightStars(userRating);
            document.getElementById('rating').value = userRating;
        });
    });
});

function highlightStars(rating) {
    const stars = document.querySelectorAll('.star-rating span');

    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = '#ffd700';
        } else {
            star.style.color = 'lightgray'; // Set your desired initial color
        }
    });
}
    if (!temporary) {
        // Set the final rating value
        document.getElementById('rating').value = rating;
    }
