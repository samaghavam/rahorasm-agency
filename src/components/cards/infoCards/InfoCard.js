import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardFooter } from 'react-bootstrap';
import { MdOutlineModeNight } from "react-icons/md";
import { BsAirplane } from "react-icons/bs";
import { FaBus } from 'react-icons/fa6';
import { IoPricetagsOutline } from "react-icons/io5";
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
function InfoCard({title,tour_duration,tour_type,price,id,airline}) {
    return (
        <Card className='card-style animation my-3'>
          <Card.Body>
            <Card.Title className='fw-bold text-body fs-6'>{title}</Card.Title>
            <div>
                <p className='my-0 text-body-secondary'>
                    <span className='pe-2'><MdOutlineModeNight /></span>
                    <span className='font-cards'>{tour_duration}</span>
                </p>
                <p className='my-0 text-body-secondary'>
                    <span className='pe-2'>{tour_type==="land"?<FaBus/>:<BsAirplane />}</span>
                    <span className='font-cards'>{airline}</span>
                </p>
                <p className='my-0 text-body-secondary'>
                    <span className='pe-2'><IoPricetagsOutline /></span>
                    <span className='font-cards'>قیمت از: {formatPrice(price)} تومان</span>
                </p>
            </div>
          </Card.Body>
          <CardFooter className='d-flex justify-content-end'>
            <Button className='btn-custome  rounded-pill card-style'>مشاهده تور</Button>
          </CardFooter>
        </Card>
      );
}

export default InfoCard;