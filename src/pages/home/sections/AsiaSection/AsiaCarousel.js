import Carousel from 'react-bootstrap/Carousel';
import CardsTravel from '../../../../components/cards/CardsTravel';
import { Row, Col} from 'react-bootstrap';
import { useQuery } from '@tanstack/react-query';
import axios from "axios"
import { useEffect, useState } from 'react';
function AsiaCarousel() {
    const [tours,setTour] = useState()
    const { isPending, error, data, } = useQuery({
        queryKey: ['tours'],
        queryFn: async () => {
            const response = await axios.get(
                process.env.REACT_APP_BASE_URL+'/tour/tours/',
            )
            return response.data
        },
    })
    useEffect(()=>{
        if(data){
            setTour(data.filter((tour)=>(tour.destination_airport.city.country.continent.id===1)))
        }
    },[data])
    if(error){
        return(<div>{error}</div>)
    }
    return (
        <Carousel>
            {[1,2].map((value)=>{
                if(isPending)
                    return (<div key={value} style={{width:"50px",height:"60px"}} className="shimer"/>)
                else if(tours)
                return tours.map((tour) =>(
                    <Carousel.Item key={((tour.id + value) * (tour.id + value + 1) / 2) + value} interval={300} className='pb-4'>
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