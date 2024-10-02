import { Container } from "react-bootstrap";
import CarouselCustome from "../../../components/cards/Carousel";

function HomeHotel(){
    return(
        <Container className="px-3 py-5 my-5 ">
            <h3 className="fw-bold"><span className='advise-title '>هتل های ویژه</span></h3>
            <CarouselCustome />
        </Container>
    )
}
export default HomeHotel;