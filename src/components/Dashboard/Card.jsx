import React from 'react';

export const Card = ({ image }) => {
  return (
    <div className="card w-95 bg-base-100 mb-4 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      <figure className="h-50">
        <img
          src={image}
          alt="Course"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-semibold">
          Card Title
          <span className="badge badge-secondary">NEW</span>
        </h2>
        <p className="text-sm text-gray-600">
          A card component has a figure, a body, and inside the body there
          are title and actions parts.
        </p>
      </div>
    </div>
  );
};
