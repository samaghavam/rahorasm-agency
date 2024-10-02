import { Container } from 'react-bootstrap';
import './SpecialAdvise.css';
import CarouselCustome from '../../../components/cards/Carousel';

function SpecialAdvise() {

  return (
    <Container className='px-3 py-5 my-5 advise-container'>
      <h4 className='fw-bold p-3 my-3 text-dark'><span className='advise-title '>پیشنهادات ویژه</span></h4>
      <CarouselCustome />
    </Container>
    
  );
}
export default SpecialAdvise;