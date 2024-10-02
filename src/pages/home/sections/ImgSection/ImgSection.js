import { FaArrowLeft } from "react-icons/fa6";
import {Col , Image} from "react-bootstrap";
import sectionImg from "../../../../assets/images/home/—Pngtree—airplane travel tourism supplies_6374202.png"
import { Link } from "react-router-dom";

function ImgSection(){
    return(
        <Col className="bg-black2 d-flex flex-column justify-content-center align-items-center bottom-left-b" lg={6}>
            <Image src={sectionImg} fluid className="p-4"></Image>
            <Link to='blogs' className="text-light text-center fw-bold">
                <span className="pe-2 text-white">جدیدترین اخبار و مقالات گردشگری</span>
                <span><FaArrowLeft fontSize='1.3rem' color="white" /></span>
            </Link>
        </Col>
    )
}
export default ImgSection;