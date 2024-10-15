import { Container, Row, Col,Image, Button } from "react-bootstrap";
import CallAction from "../../../assets/images/home/locations.webp";
import "./CallToAction.css";
import { useEffect } from "react";
import AOS from 'aos';
import axios from "axios";
const EUID = 2
function CallToAction(){
    useEffect(() => {
        AOS.init();
      }, []);
    const getEurope=async()=>{
        const response = await axios.get(process.env.REACT_APP_BASE_URLL+`/tour/packages/${EUID}/CsvTours/`)
        const blob = new Blob([response.data], {type: response.data.type});
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const contentDisposition = response.headers['content-disposition'];
        let fileName = 'unknown';
        console.log(response.headers)
        if (contentDisposition) {
            const fileNameMatch = contentDisposition.match(/filename="(.+)"/);
            console.log(contentDisposition)
            if (fileNameMatch.length === 2)
                fileName = fileNameMatch[1];
        }
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
    }
    return(
        <Container className="py-5">
            <Row>
                <Col data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="2000" data-aos-delay="650" data-aos-once='true'>
                    <h3 className="fw-bold">شما را به یک سفر زیبا دعوت می کنیم</h3>
                    <h5>با ما همراه شوید و تجربه ی یک سفر بی نظیر را به یاد ماندنی کنید. برای کسب اطلاعات بیشتر و رزرو تورها با ما تماس بگیرید.</h5>
                    <Button onClick={getEurope} className="btn-custome card-style mt-2">جهت دانلود پکیج تورهای اروپا کلیک کنید</Button>
                </Col>
                <Col lg={5} className="call-bg" data-aos="zoom-out-right" data-aos-duration="1500" data-aos-delay="700" data-aos-once='true' >
                    <Image src={CallAction} fluid></Image>
                </Col>
            </Row>
        </Container>
    )
}
export default CallToAction;