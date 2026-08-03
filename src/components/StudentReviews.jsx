import "./StudentReviews.css";

function StudentReviews() {

  const reviews = [
    {
      name: "Rahim Hasan",
      class: "Class 9",
      text: "EasyDOS helped me understand Physics much faster.",
      rating: "★★★★★"
    },
    {
      name: "Sumaiya Akter",
      class: "SSC 2027",
      text: "The videos and PDFs are amazing. Everything is free!",
      rating: "★★★★★"
    },
    {
      name: "Sabbir Ahmed",
      class: "Class 10",
      text: "The best learning platform I have used.",
      rating: "★★★★★"
    }
  ];

  return (
    <section className="reviews-section">

      <h2>💬 What Students Say</h2>

      <div className="reviews-grid">

        {reviews.map((review, index) => (

          <div
            className="review-card"
            key={index}
          >

            <div className="stars">
              {review.rating}
            </div>

            <p className="review-text">
              "{review.text}"
            </p>

            <h3>{review.name}</h3>

            <span>{review.class}</span>

          </div>

        ))}

      </div>

    </section>
  );

}

export default StudentReviews;