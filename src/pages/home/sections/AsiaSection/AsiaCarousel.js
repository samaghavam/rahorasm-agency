import Carousel from 'react-bootstrap/Carousel';
import CardsTravel from '../../../../components/cards/CardsTravel';
import { Row, Col} from 'react-bootstrap';
import TourNumbers from '../../../AsiaTour/test/filters/tourNumbers/TourNumbers';
import { useQuery } from '@tanstack/react-query';
import axios from "axios"
import { useEffect, useState } from 'react';
function AsiaCarousel() {
    const [tours,setTour] = useState()
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['tours'],
        queryFn: async () => {
            const response = await axios.get(
                'https://rahorasm.msdcorporation.top/tour/tours/',
            )
            return response.data
        },
    })
    useEffect(()=>{
        if(data){
            setTour(data.filter((tour)=>(tour.destination_airport.city.country.continent.id===1)))
        }
    },[data])
    return (
        <Carousel>
            {[0,1].map(()=>{
                if(tours)
                return tours.map((tour) =>(
                    <Carousel.Item interval={300} className='pb-4'>
                        <Row className='g-3 px-2'>
                            <Col md={6} xs={12}>
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
                ))
            })}
        </Carousel>
    )

}
export default AsiaCarousel;