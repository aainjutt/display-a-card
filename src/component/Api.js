// src/api.js

export const Listings = [
    {
      id: 1,
      imageUrl: 'https://placehold.co/400',
      title: '1 Kanal House for sale',
      address: 'DHA Phase 6, Lahore',
      beds: 5,
      bath: 6,
      coveredAreaSQFT: 2350,
      propertyType: 'house',
      isCommercial: false,
      price: 65000000
    },
    // Add more listings here if needed
  ];
  
  export const getListingDetail = (id) => {
    return Listings.find(listing => listing.id === id);
  };
  