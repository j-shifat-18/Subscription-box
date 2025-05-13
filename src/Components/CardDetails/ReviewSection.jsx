import React from "react";
import { useState } from "react";

const ReviewSection = () => {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!review || !rating || rating < 1 || rating > 5) {
      alert("Please enter a review and a valid rating (1-5).");
      return;
    }

    const newReview = {
      review,
      rating,
      id: Date.now(),
    };

    setReviews([newReview, ...reviews]);
    setReview("");
    setRating("");
  };
  return (
    <div className="max-w-5xl border-2 border-slate-400 mt-12 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Write a Review</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          placeholder="Write your review..."
          className="w-full textarea textarea-bordered"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          required
        ></textarea>

        <div className="flex items-center gap-4">
          <input
            type="number"
            min={1}
            max={5}
            className="input input-bordered w-32"
            placeholder="Rating (1-5)"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </div>
      </form>

      {/* Reviews Display */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-2">All Reviews</h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((r) => (
              <div key={r.id} className="p-4 bg-secondary rounded shadow">
                <p className="text-gray-800 text-lg mb-2">{r.review}</p>
                <p className="text-yellow-600 text-sm font-medium">
                  ⭐ {r.rating}/5
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
