import { Button} from "react-bootstrap";
import { FaPhone } from "react-icons/fa";

function TimeCard(){
    return(
        <div className="card-style rounded px-4 py-3 text-center bg-light my-3">
            <h5 className="fw-bold py-1">با مشاوره تلفنی آسان بخرید.</h5>
            <p>شنبه تا چهارشنبه 09:30 الی 17:30 </p>
            <p>پنج شنبه ها 09:30 الی 14:00</p>
            <Button className='btn-custome w-100 text-light card-style btn-transition'>
                <span><FaPhone fontSize='1.2rem' className="phone-animation"/></span>
                <span className="ps-2">مشاوره رایگان</span>
            </Button>
        </div>
    )
}
export default TimeCard;