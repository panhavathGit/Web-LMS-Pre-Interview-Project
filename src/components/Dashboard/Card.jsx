import React from 'react';

export const Card = ({ image, cardTitle ,content}) => {
  return (
    <div className="card w-95 bg-base-100 mb-4 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <figure className="h-45">
        <img
          src={image}
          alt="Course"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">
          {cardTitle}
        </h2>
        <p className="text-sm text-gray-600">
          {content}
        </p>
      </div>
    </div>
  );
};
