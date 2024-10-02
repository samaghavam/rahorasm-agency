import React from 'react';
import { useParams } from 'react-router-dom';

const CityHotelsDetails = ({ hotelsData }) => {
  const { city } = useParams();
  const cityData = hotelsData.find(hotel => hotel.city === city); // Filtering based on city

  return (
    <div>
      <h2>Hotels in {city}</h2>
      {cityData && cityData.hotels.map(hotel => (
        <div key={hotel.id}>
          <h3>{hotel.name}</h3>
          <img src={hotel.hotelImg} alt={hotel.name} />
          <p>{hotel.star} Stars</p>
        </div>
      ))}
    </div>
  );
};
export default CityHotelsDetails;