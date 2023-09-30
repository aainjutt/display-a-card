import React from 'react';
import './Card.css';

const ListingCard = ({ listing, onClick }) => {
 
    const handleClick = (id) => {
        console.log(`Clicked on listing with ID: ${id}`);
      };
  return (
    <div className="listing-card">
      <img src={listing.imageUrl} alt={listing.title} />
      <h3>{listing.title}</h3>
      <p>{listing.address}</p>
      <button onClick={handleClick}>View Details</button>
    </div>
  );
};

export default ListingCard;
