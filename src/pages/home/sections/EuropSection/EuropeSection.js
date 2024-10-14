import { FaArrowLeft } from "react-icons/fa6";
import Col from "react-bootstrap/Col";
import InfoCard from "../../../../components/cards/infoCards/InfoCard";
import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loader from "../../../../components/loaders/Loader";

function EuropeSection(){
    const [euTours,setEUtours]= useState([])
    const { isPending, error, data, isFetching } = useQuery({
        queryKey: ['Europetour'],
        queryFn: async () => {
            const response = await axios.get(
                process.env.REACT_APP_BASE_URL+'/tour/tours/',
            )
            return response.data
        },
    })
    useEffect(()=>{
        if(data){
            setEUtours(data.filter((tour)=>(tour.destination_airport.city.country.continent.id===2)))
        }
    },[data])
    return(
        <Col className="bg-black p-5 top-left-b " xs={12} lg={6}>
            <h3 className="text-white pb-2 fw-bold">تازه ترین تورهای اروپا <span className="fs-6">(ویژه تابستان 1403)</span></h3>
            <div className="europeSection mt-2 p-3">
            {isPending?
            <>
            {[1,2,3].map((v)=>{
                <div key={v} className="shimmer"></div>
            })
        }
            </>:<>
                    {euTours && euTours.length > 0 && data.map((tour) => (
                        <InfoCard
                            title={tour.title}
                            tour_duration={tour.tour_duration}
                            tour_type={tour.tour_type}
                            price={tour.price}
                            id={tour.id}
                            airline={tour.airline.name}
                        />
                    ))}
                </>
            }
            </div>
            <h5 href="" className="text-light text-center mt-5 fw-bold">
                <span className="pe-2 text-white">مشاهده بیشتر</span>
                <span><FaArrowLeft fontSize='1.3rem' color="white"/></span>
            </h5>
        </Col>
    )
}
export default EuropeSection;