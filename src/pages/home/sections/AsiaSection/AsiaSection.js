import Col from "react-bootstrap/Col";
import { FaArrowLeft } from "react-icons/fa6";
import AsiaCarousel from "./AsiaCarousel";
import { Link } from "react-router-dom";


function AsiaSection(){
    return(
        <Col className="bg-primary1 p-5 top-right-b" >
            <h3 className="fw-bold mb-4"><span className="asia-title">تازه ترین تورهای آسیا</span></h3>
            <AsiaCarousel />
            <h5 href="" className="text-light fw-bold mt-5 text-center">
                <Link to={"./tour/?continent=1"}>
                    <span className="pe-2">مشاهده بیشتر</span>
                </Link>
                <span><FaArrowLeft fontSize='1.3rem' /></span>
            </h5>
        </Col>
    )
}
export default AsiaSection;