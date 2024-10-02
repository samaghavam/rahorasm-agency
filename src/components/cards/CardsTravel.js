import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardFooter } from 'react-bootstrap';
import { MdOutlineModeNight } from "react-icons/md";
import { BsAirplane } from "react-icons/bs";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaBus } from 'react-icons/fa6';
import './CardsTravel.css';
import cardImg1 from "../../assets/images/Cards/antalya2.webp";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function formatPrice(price) {
  let fPrice = ""
  for (let i = price.indexOf(".")-1; i >= 0; i--) {
    fPrice = price[i] + fPrice
    if (i % 3 == 2 && i != 0) {
      fPrice = "/"+ fPrice
    }
  }
  return fPrice

}
function CardsTravel({title,tour_duration,tour_type,price,id,airline}) {
   const navigate =  useNavigate()
    return (
        <Card className='card-style animation my-3'>
          <Card.Img variant="top" src={cardImg1} />
          <Card.Body>
            <Card.Title className='fw-bold text-body fs-6'>{title}</Card.Title>
            <div>
                <p className='my-0 text-body-secondary'>
                    <span className='pe-2'><MdOutlineModeNight /></span>
                    <span className='font-cards'>{tour_duration}</span>
                </p>
                <p className='my-0 text-body-secondary'>
                    <span className='pe-2'>{tour_type=="land"?<FaBus/>:<BsAirplane />}</span>
                    <span className='font-cards'>{airline}</span>
                </p>
                <p className='my-0 text-body-secondary'>
                    <span className='pe-2'><IoPricetagsOutline /></span>
                    <span className='font-cards'>قیمت از: {formatPrice(price)} تومان</span>
                </p>
            </div>
          </Card.Body>
          <CardFooter className='d-flex justify-content-center'>
            <Button onClick={()=>{navigate(`/tour/${id}`)}}  className='btn-custome rounded-pill card-style'>مشاهده تور</Button>
          </CardFooter>
        </Card>
      );
}

export default CardsTravel;