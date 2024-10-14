import "./Ordering.css";
import {BsFilterLeft } from "react-icons/bs";
import {Button} from "react-bootstrap";


const ButtonCarousel = ({sortBy}) => {
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
                <Button onClick={()=>{sortBy("is_featured")}} className="mx-1 fs-orders btn-custome border">پیشنهاد راه و رسم</Button>
                <Button onClick={()=>{sortBy("cheap")}} className="mx-1 fs-orders btn-custome border">ارزان ترین</Button>
                <Button onClick={()=>{sortBy("expensive")}} className="mx-1 fs-orders btn-custome border">گران ترین</Button>
                <Button onClick={()=>{sortBy("shortest")}} className="mx-1 fs-orders btn-custome border">کم ترین مدت</Button>
                <Button onClick={()=>{sortBy("longest")}} className="mx-1 fs-orders btn-custome border">بیشترین مدت</Button>
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


