import React from 'react';
import { FaStar } from 'react-icons/fa';

const StartRating = () => {
  return (
    <div className="flex flex-row">
      {[...Array(5)].map((star) => {
        return (
          <div className="flex flex-row">
            {' '}
            <FaStar />
          </div>
        );
      })}
    </div>
  );
};

export default StartRating;
