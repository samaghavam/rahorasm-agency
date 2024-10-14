import axios from "axios";
import { NavLink} from "react-router-dom";
import { TiArrowLeftThick } from "react-icons/ti";
import { Col } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../loaders/Loader";
function TourAttractionfooter(){
    const { isPending, error,data:attractions, isFetching } = useQuery({
      queryKey: ['DBInfo'],
      enabled:false,
      queryFn: async () => {
        const response = await axios.get(
          '/db.json',
        )
        return response.data
      },
    })
    return(
        <Col  md={6} lg={3}>
            <div className="contact-box text-light">
            <h4 className="text-center text-white py-3 border-bottom border-2">جاذبه های گردشگری</h4>
            {
                isPending?<Loader/>:(attractions && attractions.footerattraction.map((place,i)=>(
                <ul key={i}>
                    <li>
                        <NavLink to={place.path} className="text-light footer-link">
                            <span><TiArrowLeftThick color="white"/></span>
                            <span className="ps-2 text-white">جاذبه های {place.name}</span>
                        </NavLink>
                    </li>
                </ul>
            )))
            }
        </div>
        </Col>
    )
}
export default TourAttractionfooter;