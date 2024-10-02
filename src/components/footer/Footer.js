import { Container, Row} from "react-bootstrap";
import FooterInfo from "./part4/FooterInfo";
import TourLinks from "./part1/TourLinks";
import HotelsInfo from "./part2/HotelsInfo";
import TourAttractionfooter from "./part3/TourAttraction";
import "./Footer.css";


function Footer(){
    return(
        <section className="mt-5 bg-black2 p-5">
            <Container>
                <Row>
                    <FooterInfo key={1} />
                    <TourLinks key={2}/>
                    <HotelsInfo key={3}/>
                    <TourAttractionfooter key={4}/>
                </Row>
            </Container>
        </section>
    )
}
export default Footer;