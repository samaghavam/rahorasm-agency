import { Col, Row, Image, Button } from "react-bootstrap";
import visaImg from "../../../../assets/images/home/europe-map.webp";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import VisaSection from "./VisaSection";
import { IconContext } from "react-icons";
import "./Section3.css";
import arrowImg from "../../../../assets/images/home/arrow.webp";

function Section3(){
    return(
        <Col className="section3">
            <Row>
                <Col className="bg-body-secondary p-4">
                    <p className="text-justify p-3">در صورت عدم مشاهده پکیج مورد نظرتان در وب سایت، با توجه به تنوع هتل ها و پروازها، جهت بررسی تور مد نظر با کارشناسان آژانس راه و رسم سفر تماس حاصل نمایید.</p>
                        <div className="text-center">
                            <Button className='btn-custome rounded-pill p-3 card-style'><IoCall fontSize='1.5rem' className="phone-animation"/></Button>
                        </div>
                    <div className="p-5 mt-4 moveBox d-none d-lg-block">
                        <Image src={arrowImg} fluid className="arrowImg" />
                    </div>
                </Col>
                <Col lg={6} className="d-flex flex-column justify-cintent-center">
                    <Image src={visaImg} fluid className="p-5"></Image>
                    <p className="text-center">برای اطمینان از سفری بی دردسر، جهت دریافت اطلاعات و مدارک مورد نیاز برای اخذ ویزا کافی است کشور مد نظر خود را انتخاب کنید </p>
                    <VisaSection />
                </Col>
            </Row>
            <Row className="bg-black bottom-right-b p-3 d-none d-lg-block">
                <div className="d-flex align-items-center justify-content-between">
                    <h6 className="fw-bold text-white">ما را در شبکه های اجتماعی دنبال کنید</h6>
                    <div className="text-end">
                    <IconContext.Provider value={{className: 'icon'}}>
                        <RiInstagramFill fontSize='2rem' className="m-3 text-white" />
                        <BsTelegram fontSize='2rem' className="m-3 text-white" />
                        <IoLogoWhatsapp fontSize='2rem' className="m-3 text-white" />
                    </IconContext.Provider>
                    </div>
                </div>
            </Row>
        </Col>
    )
}
export default Section3;