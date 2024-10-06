import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Hotels.css'

const HotelCity = ({ city }) => {
  const navigate = useNavigate(); 

  const handleMoreInfoClick = () => {
    console.log(city); // Log to debug
    navigate(`https://rahorasm.msdcorporation.top/hotels/${city.city}`); // Ensure city has correct structure
  };

  return (
    <Card className='mb-2'>
      <Card.Img variant="top" src={city.image} />
      <Card.Body>
        <Card.Title>هتل های {city.city}</Card.Title>
        <Button 
          onClick={handleMoreInfoClick}
          className="mx-1 fs-orders btn-custome border rounded" 
        >
          اطلاعات بیشتر
        </Button>
      </Card.Body>
    </Card>
  );
};

export default HotelCity;
