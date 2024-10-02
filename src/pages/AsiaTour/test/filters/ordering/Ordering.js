import "./Ordering.css";
import {BsFilterLeft } from "react-icons/bs";
import {Button} from "react-bootstrap";


const ButtonCarousel = () => {
 return(
    <>
        <div className="carousel-row mx-auto">
            <div className="fs-orders-container">
                <p className="fs-orders pe-2 mb-0">
                <span><BsFilterLeft /></span>
                <span>مرتب سازی بر اساس:</span>
                </p>
            </div>
            <div className="button-container">
                <div className="button-scroll">
                <Button className="mx-1 fs-orders btn-custome border">پیشنهاد راه و رسم</Button>
                <Button className="mx-1 fs-orders btn-custome border">ارزان ترین</Button>
                <Button className="mx-1 fs-orders btn-custome border">گران ترین</Button>
                <Button className="mx-1 fs-orders btn-custome border">کم ترین مدت</Button>
                <Button className="mx-1 fs-orders btn-custome border">بیشترین مدت</Button>
                </div>
            </div>
        </div>

        {/* <div className="d-flex justify-content-center align-items-center">
            <div className="flow-x-style">
            </div>
        </div> */}
    </>
 )
};
export default ButtonCarousel;


