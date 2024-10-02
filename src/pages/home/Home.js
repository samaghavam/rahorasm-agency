import { Col, Container, Row, Image} from "react-bootstrap";
import bghero from "../../assets/images/home/intro.webp";
import './Home.css';
import { useEffect } from "react";
import TripForm from "./form/Form";
import AOS from 'aos';
import SpecialAdvise from "./specialAdvise/SpecialAdvise";
import CallToAction from "./callToAction/CallToAction";
import HomeSections from "./sections/HomeSections";
import HomeHotel from "./home-Hotel/HomeHotel";

function Home(){
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <section >
            <Container className="py-3 ">
                <Row className="align-items-center homeImg">
                    <Col lg={4} className="d-none d-lg-block" data-aos="fade-left" data-aos-duration="1500">
                        <Image src={bghero} fluid />
                    </Col>
                    <Col lg={8} className="home-form-bg" data-aos="fade-up" data-aos-duration="1500">
                        <h1 className="fw-bold pt-3" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100">کشف دنیای نو با</h1>
                        <h1 className="fw-bold pb-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="100">آژانس مسافرتی <span>راه و رسم سفر</span></h1>
                        <TripForm />
                    </Col>
                </Row>
            </Container>
            <SpecialAdvise />
            <CallToAction />
            <HomeSections />
            <HomeHotel />
        </section>
    )
}
export default Home;