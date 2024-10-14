// import {Row, Col, Button, Collapse} from "react-bootstrap";
// import { MdOutlineNightlight } from "react-icons/md";
// import { LuCalendarDays, LuPlane } from "react-icons/lu";
// import { IoPricetagsOutline } from "react-icons/io5";
// import { useEffect, useState } from "react";
// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import DateTravelInfo from "../../dateTravelInfo/DateTravelInfo";
// import TablsTravel from "../../tabs/Tabstravel";
// import "./TravelsCard.css";
// import axios from "axios";

// function TravelsCard(){
//     const [openStates, setOpenStates] = useState([]);
//     const[cardDatas, setCardDatas]= useState([]);

//     useEffect(() => {
//         axios
//         .get("http://localhost:7000/travelsInfo")
//         .then((res) => {
//             setCardDatas(res.data);
//             // Initialize open states array with false values for each card
//             setOpenStates(Array(res.data.length).fill(false));
//         });
//     }, []);

//     const toggleCard = (id) => {
//         setOpenStates(openStates.map((state, i) => i === id ? !state : false));
//     };
//     return(
//         <>
//             {cardDatas && cardDatas.map((cardData, id)=>(
//                 <div>
//                     <div className="rounded border bg-light-subtle mx-2 mt-3 p-2 ">
//                         <Row className="align-items-center g-2">
//                             <Col xs={12} lg={3} className="">
//                                 <h6 className="text-center header-bg fw-bold mb-0">{cardData.title}</h6>
//                             </Col>
//                             <Col lg={3} xs={6} className="border-start border-none">
//                                 <div className="border-bottom min-height50">
//                                     <p className="mb-0 py-2">
//                                         <span><MdOutlineNightlight /></span>
//                                         <span className="ps-1">{cardData.duration} شب</span>
//                                     </p>
//                                 </div>
//                                 <div className="min-height50">
//                                     <p className="mb-0 py-2">
//                                         <span><LuCalendarDays /></span>
//                                         <span className="ps-2">{cardData.date}</span>
//                                     </p>
//                                 </div>
//                             </Col>
//                             <Col lg={4} xs={6} className="border-start">
//                                 <div className="border-bottom min-height50 ms-1">
//                                     <p className="mb-0 py-2">
//                                         <span><LuPlane /></span>
//                                         <span className="ps-2">{cardData.airline}</span>
//                                     </p>
//                                 </div>
//                                 <div className="ms-1 min-height50">
//                                     <p className="mb-0 py-2">
//                                         <span><IoPricetagsOutline /></span>
//                                         <span className="ps-2">قیمت از: <strong className="text-secondary1">{cardData.price} تومان</strong></span>
//                                     </p>
//                                 </div>
//                             </Col>
//                             <Col className="text-center">
//                                 <Button
//                                     onClick={(e) => toggleCard(id)}
//                                     aria-controls={`example-collapse-text-${id}`}
//                                     aria-expanded={openStates[id]}
//                                     className="btn-custome fs-07rem"
//                                 >
//                                     تاریخ های تور {openStates[id] ? <FaAngleUp /> : <FaAngleDown />}
//                                 </Button>
//                             </Col>
//                         </Row>
//                     </div>
//                     <Row className="shadow bg-light max-height2 rounded mx-2">
//                         <Collapse in={openStates[id]}>
//                             <div id={`example-collapse-${id}`}>
//                                 {cardData.info && cardData.info.map((travelInfo)=> <DateTravelInfo key={id} {...travelInfo}/>)}
//                             </div>
//                         </Collapse>
//                     </Row>
//                 </div>
//             ))}
                
//             <TablsTravel />
//         </>
//     )
// }
// export default TravelsCard;























import { Row, Col, Button, Collapse } from "react-bootstrap";
import { MdOutlineNightlight } from "react-icons/md";
import { LuCalendarDays, LuPlane } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from "react-icons/fa6";
import DateTravelInfo from "../../dateTravelInfo/DateTravelInfo";
import TablsTravel from "../../tabs/Tabstravel";
import "./TravelsCard.css";
import axios from "axios";
import { FilterCTX } from "../../../pages/Tour/Tours";
import { getDefaultNormalizer } from "@testing-library/react";
import { replace, useNavigate } from "react-router-dom";

// Function to format date from "1403-07-05T06:00:00+0000" to "1403/07/05"
const formatDate = (dateString) => {
    const dateParts = dateString.split("T")[0].split("-");
    return `${dateParts[0]}/${dateParts[1]}/${dateParts[2]}`;
};

function TravelsCard({tours}) {
    const navigate = useNavigate()


    return (
        <>
            {tours && tours.map((cardData, index) => (
                <div key={cardData.id}>
                    <div className="rounded border bg-light-subtle mx-2 mt-3 p-2">
                        <Row className="align-items-center g-2">
                            <Col xs={12} lg={3}>
                                <h6 className="text-center header-bg fw-bold mb-0">{cardData.title}</h6>
                            </Col>
                            <Col lg={3} xs={6} className="border-start border-none">
                                <div className="border-bottom min-height50">
                                    <p className="mb-0 py-2">
                                        <span><MdOutlineNightlight /></span>
                                        <span className="ps-1">{cardData.tour_duration || "Unknown Duration"}</span>
                                    </p>
                                </div>
                                <div className="min-height50">
                                    <p className="mb-0 py-2">
                                        <span><LuCalendarDays /></span>
                                        <span className="ps-2">{formatDate(cardData.start_date)}</span>
                                    </p>
                                </div>
                            </Col>
                            <Col lg={4} xs={6} className="border-start">
                                <div className="border-bottom min-height50 ms-1">
                                    <p className="mb-0 py-2">
                                        <span><LuPlane /></span>
                                        <span className="ps-2">{cardData.airline?.name || "Unknown Airline"}</span>
                                    </p>
                                </div>
                                <div className="ms-1 min-height50">
                                    <p className="mb-0 py-2">
                                        <span><IoPricetagsOutline /></span>
                                        <span className="ps-2">قیمت از: <strong className="text-secondary1">{cardData.price} تومان</strong></span>
                                    </p>
                                </div>
                            </Col>
                            <Col className="text-center">
                                <Button
                                    onClick={() =>navigate("/tour/detail/"+cardData.id,{replace:true})}
                                    className="btn-custome fs-07rem"
                                >
                                    مشاهده  <FaAngleLeft/> 
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    {/* <Row className="shadow bg-light max-height2 rounded mx-2">
                        <Collapse in={openStates[index]}>
                            <div id={`example-collapse-${index}`}>
                                <DateTravelInfo 
                                    key={cardData.id} 
                                    turn={formatDate(cardData.start_date)}  // Format start date
                                    retunTime={formatDate(cardData.end_date)} // Format end date
                                    packagePrice={cardData.price} 
                                />
                            </div>
                        </Collapse>
                    </Row> */}
                </div>
            ))}
            <TablsTravel />
        </>
    );
}

export default TravelsCard;




