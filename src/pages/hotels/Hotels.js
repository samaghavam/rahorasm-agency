import { Container, Row, Col } from "react-bootstrap";
import HotelCity from "./HotelCity";
import { useState, useEffect } from "react";
import axios from "axios";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  const getHotelsData = async () => {
    try {
      const response = await axios.get('http://localhost:7000/hotels');
      setHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHotelsData();
  }, []);
  
  return (
    <Container>
      <h3 className="text-center my-4">هتل های ترکیه</h3>
      <Row className='my-2'>
        {hotels.map(hotel =>
          hotel.children.map(country =>
            country.children.map(city => (
              <Col xs={12} md={6} lg={3} key={city.id}>
                <HotelCity city={city} />
              </Col>
            ))
          )
        )}
      </Row>
    </Container>
  );
}

export default Hotels;
