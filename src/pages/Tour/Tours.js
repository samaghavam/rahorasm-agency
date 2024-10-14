import {Container , Row , Col} from "react-bootstrap";
import TravelsCard from "../../components/cards/cardtravels/TravelsCard";
import "./AsiaTour.css";
import Filterstravel from "./filters/Filters";
import "./filters/ordering/Ordering.css"
import ButtonCarousel from "./filters/ordering/Ordering";
import axios from "axios";
import { createContext, useCallback, useEffect,useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router-dom";

export const FilterCTX = createContext({
    init:{},
    setDuration:()=>{},
    setAirline:()=>{},
    setPriceRange:()=>{},
    submit:()=>{},
})
Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
const SortBy ={
   is_featured:"is_featured",
   cheapest:"cheap",
   expensive:"expensive",
   shortes:"shortest",
   longest:"longest"
}
function Tours(){
    const {cityId}=useParams()
    const [init,setInit] = useState({})
    const [priceRange,setPriceRange] = useState()
    const [airline,setAirline] = useState()
    const [duraiton,setDuration] = useState()
    const [tours,setTours] = useState()
    const [sort,setSort] = useState()
    const submit = useCallback(()=>{
        let tour =data.tours.filter((v)=>v.price>=priceRange[0]&&v.price<=priceRange[1])
        tour = tour.filter((v)=>airline.includes(v.airline.name))
        console.log(tour,airline)
        tour = tour.filter((v)=>duraiton.includes(v.tour_duration))
        console.log(tour)
        setTours(tour)
    })
    const {data,isPending} = useQuery({
        queryKey:["tourPackages"+cityId],
        enabled:cityId!=undefined,
        queryFn:async ()=>{
            const res = await axios.get(process.env.REACT_APP_BASE_URL+"/tour/packages/"+cityId);
            return res.data
        } 
    })
    useEffect(()=>{
        let t = tours
        let LocalTour=t
        switch (sort) {
            case SortBy.cheapest:
                LocalTour = t.sort((a,b)=>b.price-a.price)
                break;
            case SortBy.expensive:
                LocalTour = t.sort((a,b)=>a.price-b.price)
                break;
            case SortBy.is_featured:
                LocalTour = t.sort((a, b) => {
                    return (a.is_featured === b.is_featured) ? 0 : a.is_featured ? -1 : 1;
                  });
                  break
            case SortBy.longest:
                LocalTour= t.sort((a,b)=>parseInt(a.tour_duration,10)-parseInt(b.tour_duration,10))
                console.log(t.sort((a,b)=>parseInt(a.tour_duration,10)-parseInt(b.tour_duration,10)).map((v)=>parseInt(v.tour_duration,10)))
                break
            case SortBy.shortes:
                LocalTour= t.sort((a,b)=>parseInt(b.tour_duration,10)-parseInt(a.tour_duration,10))
                console.log(t.sort((a,b)=>parseInt(b.tour_duration,10)-parseInt(a.tour_duration,10)).map((v)=>parseInt(v.tour_duration,10)))
                break
            default:
                break;
        }
        setTours(LocalTour)
    },[sort])
    useEffect(()=>{
        if(data){
            let price = data.tours.map((v)=>v.price)
            setTours(data.tours)
            setAirline(data.tours.map((v)=>v.airline.name))
            setDuration(data.tours.map((v)=>v.tour_duration))
            setPriceRange([price.min(),price.max()])
            setInit({      
                link1: data.land,
                link2: data.ProsCons,
                link3: data.attraction,
                link4: data.Basetime,
                name:data.city.name,
                min_price:price.min(),
                max_price:price.max(),
                time:data.tours.map((v)=>v.start_date),
                airline:data.tours.map((v)=>v.airline.name),
                Count:data.tours.length,
                toursDurations:data.tours.map((v)=>v.tour_duration)})
        }
    },[data])

    return(
        <div className="test">
            <FilterCTX.Provider value={{init:init,setPriceRange:setPriceRange,setDuration:setDuration,setAirline:setAirline,submit:submit}}>
                <Container>
                    <Row>
                        <Filterstravel  />
                        <Col lg={9}>
                            <ButtonCarousel sortBy={setSort} />
                            <TravelsCard tours={tours}  />
                        </Col>
                    </Row>
                </Container>
            </FilterCTX.Provider>
        </div>
         )
}
export default Tours;