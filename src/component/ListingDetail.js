// src/components/ListingDetail.js

import React from 'react';
import { getListingDetail } from './Api';

const ListingDetail = ({ match }) => {
  const listingId = parseInt(match.params.id);
  const listing = getListingDetail(listingId);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="listing-detail">
      <img src={listing.imageUrl} alt={listing.title} />
      <h1>{listing.title}</h1>
      <p>{listing.address}</p>
      <p>Beds: {listing.beds}</p>
      <p>Bathrooms: {listing.bath}</p>
      <p>Covered Area (sqft): {listing.coveredAreaSQFT}</p>
      <p>Property Type: {listing.propertyType}</p>
      <p>Commercial: {listing.isCommercial ? 'Yes' : 'No'}</p>
      <p>Price: {listing.price}</p>
    </div>
  );
};

export default ListingDetail;
