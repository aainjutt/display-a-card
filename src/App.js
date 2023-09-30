// src/App.js

import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListingCard from './component/Card';
import ListingDetail from './component/ListingDetail';
import { Listings } from './component/Api';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <h1>Property Listings</h1>
        <Routes>
          <Route path="/" element={<ListingsPage />} />
          <Route path="/listing/:id" element={<ListingDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

const ListingsPage = () => {
  const [selectedListing, setSelectedListing] = useState(null);

  const handleCardClick = (id) => {
    setSelectedListing(id);
  };
  return (
    <div>
      {Listings.map(listing => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

const ListingDetailPage = ({ match }) => {
  const listingId = parseInt(match.params.id);
  const listing = Listings.find(listing => listing.id === listingId);

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return <ListingDetail listing={listing} />;
};

export default App;
