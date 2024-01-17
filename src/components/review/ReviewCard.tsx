/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoIosStar } from "react-icons/io";

type ReviewCardProps = IReview.Review;

const ReviewCard = ({ name, review, rating, image }: ReviewCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow-md mb-4">
    <div className="flex items-center mb-4">
      <div className="w-[60px] h-[60px] overflow-hidden mr-4 rounded-full">
        <img
          alt=""
          src={image}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
    </div>
    <p className="text-gray-600 mb-2">{review}</p>
    <div className="flex items-center">
      {Array.from({ length: rating }, (_, index) => (
        <IoIosStar key={index} className="text-yellow-500" />
      ))}
    </div>
  </div>
);

export default ReviewCard;
