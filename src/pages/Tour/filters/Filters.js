import RangeSlider from "../filters/priceRange/PriceRange";
import TimeDuration from "../filters/timeDuration/TimeDuration";
import TimeCard from "../../../components/time/TimeCard";
import Airline from "../filters/airLine/AirLine";
import TourNumbers from "../filters/tourNumbers/TourNumbers";
import { Col, Button, Offcanvas } from "react-bootstrap";
import { useContext, useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import TravelDesc from "./travelDesc/TravelDesc";
import { useCol } from "react-bootstrap/esm/Col";
import { FilterCTX } from "../Tours";

function Filterstravel(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {submit}=useContext(FilterCTX)
    return(
        <> 
            <div className="px-3 d-lg-none">
                <Button  fixed="bottom" className="card-style w-100 bg-light text-dark mb-2 " onClick={handleShow}>
                    <span><TbCategoryPlus /></span>
                    <span className="ps-1">فیلترها</span>
                </Button>
            </div> 
            <Offcanvas className="bg-warning-subtle" show={show} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>فیلترها</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="d-lg-none  py-2">
                        <RangeSlider />
                        <TimeDuration />
                        <Airline />
                        <div onClick={submit} className="card-style rounded active-btn m-2 btn-custome text-light" >اعمال فیلتر</div>
                        <TimeCard />
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Col lg={3} className="d-none text-center d-lg-block py-2 px-3 rounded border bg-light-subtle shadow ">
                <TravelDesc />
                <TourNumbers />
                <RangeSlider />
                <TimeDuration />
                <Airline />
                <div onClick={submit}className="card-style rounded active-btn m-2 btn-custome text-light" >اعمال فیلتر</div>
                <TimeCard />
            </Col>
        </>
    )
}
export default Filterstravel;