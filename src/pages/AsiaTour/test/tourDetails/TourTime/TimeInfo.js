// import { Row, Col } from "react-bootstrap";
// import { HiArrowNarrowLeft } from "react-icons/hi";
// import { NavLink } from "react-router-dom";
// import "./TimeInfo.css";

// function InfoTime() {
//   return (
//     <section className="m-2 border border-3 p-2 rounded timeInfoContainer">
//       <NavLink className="timeLink">
//         <Row className="align-items-center justify-content-between">
//           <Col className="text-start">
//             <h6>دوشنبه</h6>
//             <h6 className="fw-bold text-secondary1">19 شهریور</h6>
//             <h6>ساعت 07:30</h6>
//           </Col>
//           <Col xs={2} className="text-center">
//             <HiArrowNarrowLeft fontSize="34px" color="#dee2e6" />
//           </Col>
//           <Col className="text-end">
//             <h6>دوشنبه</h6>
//             <h6 className="fw-bold text-secondary1">19 شهریور</h6>
//             <h6>ساعت 07:30</h6>
//           </Col>
//         </Row>
//       </NavLink>
//     </section>
//   );
// }
// export default InfoTime;









import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./TimeInfo.css";

function InfoTime() {
  const [tours, setTours] = useState([]);

  
  useEffect(() => {
    axios.get("https://rahorasm.msdcorporation.top/tour/packages/")
      .then(response => {
        setTours(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <section className="m-2 border border-3 p-2 rounded timeInfoContainer">
      {tours.map(tour => (
        tour.tours.map((tourDetails) => (
          <NavLink key={tourDetails.id} className="timeLink" to={tourDetails.path}>
            <Row className="align-items-center justify-content-between">
              <Col className="text-start">
                <h6>{new Date(tourDetails.start_date).toLocaleDateString('fa-IR', { weekday: 'long' })}</h6>
                <h6 className="fw-bold text-secondary1">{new Date(tourDetails.start_date).toLocaleDateString('fa-IR')}</h6>
                <h6>ساعت {new Date(tourDetails.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
              </Col>
              <Col xs={2} className="text-center">
                <HiArrowNarrowLeft fontSize="34px" color="#dee2e6" />
              </Col>
              <Col className="text-end">
                <h6>{new Date(tourDetails.end_date).toLocaleDateString('fa-IR', { weekday: 'long' })}</h6>
                <h6 className="fw-bold text-secondary1">{new Date(tourDetails.end_date).toLocaleDateString('fa-IR')}</h6>
                <h6>ساعت {new Date(tourDetails.end_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
              </Col>
            </Row>
          </NavLink>
        ))
      ))}
    </section>
  );
}

export default InfoTime;

