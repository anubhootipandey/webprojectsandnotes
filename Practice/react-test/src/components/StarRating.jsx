import React, { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (index) => {
        setRating(index + 1);
    };

  return (
    <div>
        {[...Array(5)].map((star, index) => (
            <span 
            key={index} 
            onClick={() => handleRating(index)}
            style={{cursor: "pointer", color: index < rating ? "yellow" : "#ccc", fontSize: "50px"}}
            >
                ★
            </span>
        ))}
        <p>Rating : {rating}</p>
    </div>
  );
};

export default StarRating;