import Carousel from 'react-bootstrap/Carousel';
import CardsTravel from '../../components/cards/CardsTravel';
import { Row, Col} from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import axios from "axios"
import Loader from '../loaders/Loader';
import { useEffect, useState } from 'react';

function CarouselCustome(){
    const [tours,setTour]=useState()
    const { isPending, error,data , isFetching } = useQuery({
      queryKey: ['tours'],
      enabled:false,
      queryFn: async () => {
        const response = await axios.get(
          process.env.REACT_APP_BASE_URL+'/tour/tours/',
        )
        return response.data
      },
    })
    useEffect(()=>{
        if(data)
            setTour(data.filter((tour)=>(tour.destination_airport.city.country.continent.id===1)))
    },[data])
    return (
        <>
            {isPending ? (<Loader />) : (
                <Carousel>
                    {tours && tours.map((tour, idx) => (
                        <Carousel.Item key={idx} interval={300} className='pb-4'>
                            <Row className='g-3 px-2'>
                                <Col md={3} xs={6}>
                                    <CardsTravel
                                        title={tour.title}
                                        tour_duration={tour.tour_duration}
                                        tour_type={tour.tour_type}
                                        price={tour.price}
                                        id={tour.id}
                                        airline={tour.airline.name}
                                    />
                                </Col>
                            </Row>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )}
        </>
    )
}
export default CarouselCustome;