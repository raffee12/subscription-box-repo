import React from 'react';

const Subscription = ({ detail }) => {
 const {banner, name, category, price, frequency} = detail
 console.log(detail)
  return (
    <div className="card w-80 bg-black text-white border border-black shadow-md">
      <figure className="px-4 pt-4">
        <img
          src={banner}
          alt={name}
          className="rounded-xl h-40 w-full object-cover"
        />
      </figure>
      <div className="card-body text-center space-y-2">
        <h2 className="card-title justify-center text-white">{name}</h2>
        <p className="text-sm text-gray-300">Category: {category}</p>
        <p className="text-sm text-gray-300">Price: ${price}</p>
        <p className="text-sm text-gray-300">Frequency: {frequency}</p>
        <div className="card-actions justify-center mt-2">
          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-black btn-sm">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

