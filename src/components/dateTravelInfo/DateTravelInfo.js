import { Row, Col, Image, Button } from "react-bootstrap";
import { LuArrowDownUp } from "react-icons/lu";
import "./DateTravelCArd.css";
import datetravelInfo from "../../assets/images/tours/dateTravel.webp";
import { NavLink } from "react-router-dom";

function DateTravelInfo({ turn, retunTime, packagePrice }) {
    return (
        <div>
            <Row className="align-items-center border-bottom fs-09rem">
                <Col xs={2}>
                    <Image src={datetravelInfo} fluid className="add-padding"></Image>
                </Col>
                <Col xs={1}>
                    <div className="bg-primary1 rounded-pill text-light icon-style d-flex align-items-center justify-content-center border-end">
                        <LuArrowDownUp fontSize="1.3rem" />
                    </div>
                </Col>
                <Col lg={4} xs={9} className="pt-2 d-flex flex-column align-items-center justify-content-center">
                    <p>تاریخ رفت: <strong className="ps-4">{turn}</strong></p>
                    <p>تاریخ برگشت: <strong className="ps-2">{retunTime}</strong></p>
                </Col>
                <Col lg={2} xs={6} className="col-style border-right">
                    <p className="text-start">قیمت <strong className="pe-1">{packagePrice}</strong> تومان </p>
                </Col>
                <Col lg={3} xs={6} className="col-style border-left">
                    <NavLink to='/details'>
                        <Button variant="outline-dark" className="fs-09rem">مشاهده جزئیات تور</Button>
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}
export default DateTravelInfo;
