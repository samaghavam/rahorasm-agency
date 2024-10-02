import {Container , Row , Col} from "react-bootstrap";
import BreadcrumbExample from "../../../components/breadcrumb/BreadCrumbs";
import TravelsCard from "../../../components/cards/cardtravels/TravelsCard";
import "../AsiaTour.css";
import Filterstravel from "./filters/Filters";
import "./filters/ordering/Ordering.css"
import ButtonCarousel from "./filters/ordering/Ordering";


function AsiaIstanbul(){
    return(
        <div className="test">
            <Container>
                <Row>
                    <Filterstravel />
                    <Col lg={9}>
                        <ButtonCarousel />
                        <TravelsCard/>
                    </Col>
                </Row>
            </Container>
        </div>
         )
}
export default AsiaIstanbul;