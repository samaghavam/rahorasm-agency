import { useContext } from "react";
import { HiCheckCircle } from "react-icons/hi";
import { FilterCTX } from "../../Tours";
import { defaultFormat } from "moment-jalaali";

function TourNumbers(){
    const {init} = useContext(FilterCTX)
    return(
        <div className="card-style rounded bg-light pt-2 d-flex ps-3 align-items-center">
            <p>
                <span><HiCheckCircle /></span>
                {init.Count == 0 ? <span>تور {init.name} موجود نیست</span> :
                    <span>{init.Count}تور {init.name} برای شما پیدا شد.</span>
                }
            </p>
        </div>
    )
}
export default TourNumbers;