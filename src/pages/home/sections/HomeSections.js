import EuropeSection from "./EuropSection/EuropeSection";
import AsiaSection from "./AsiaSection/AsiaSection";
import { Container, Row } from "react-bootstrap";
import ImgSection from "./ImgSection/ImgSection";
import Section3 from "./visa-section/Section3";
import "./HomeSections.css";


function HomeSections(){
    return(
        <Container className="my-5">
            <Row>
                <AsiaSection />
                <EuropeSection />
            </Row>
            <Row>
                <Section3 />
                <ImgSection />
            </Row>
         </Container>
    )
}
export default HomeSections;