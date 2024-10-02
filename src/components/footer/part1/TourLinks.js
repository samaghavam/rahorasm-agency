import { TiArrowLeftThick } from "react-icons/ti";
import { NavLink} from "react-router-dom";
import { Col } from "react-bootstrap";
import '../Footer.css'
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function TourLinks(){
    const { isPending, error,data:links, isFetching } = useQuery({
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
        <Col md={6} lg={3}>
            <div className="contact-box text-light">
                <h4 className="text-center text-white py-3 border-bottom border-2">پربازدیدترین تورها</h4> 
                {links && links.footerLinks.map((link,i) => (
                    <ul key={i}>
                        <li>
                            <NavLink to={link.path} className="text-light footer-link">
                                <span><TiArrowLeftThick color="white"/></span>
                                <span className="ps-2 text-white">تورهای {link.name}</span>
                            </NavLink>
                        </li>
                    </ul>
                ))}
            </div>


        </Col>
    )
}
export default TourLinks;