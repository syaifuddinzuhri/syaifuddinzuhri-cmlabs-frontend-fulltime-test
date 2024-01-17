import React from "react";
import ReviewCard from "./ReviewCard";
import HeadSection from "../global/HeadSection";

const ReviewCardList = () => {
  const reviews = [
    { name: "John Doe", review: "Great product! Loved it.", rating: 5, image: 'https://picsum.photos/200' },
    { name: "Jane Doe", review: "Good quality and fast delivery.", rating: 4, image: 'https://picsum.photos/200' },
    { name: "Jane Doe", review: "Good quality and fast delivery.", rating: 4, image: 'https://picsum.photos/200' },
    { name: "Jane Doe", review: "Good quality and fast delivery.", rating: 4, image: 'https://picsum.photos/200' },
    { name: "Jane Doe", review: "Good quality and fast delivery.", rating: 4, image: 'https://picsum.photos/200' },
  ];

  return (
    <div className="my-8">
      <HeadSection title="Reviews" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCardList;
