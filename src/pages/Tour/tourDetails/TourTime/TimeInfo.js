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
import { useQuery } from "@tanstack/react-query";
const formatDate = (date) => {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  let day = date.getDate().toString().padStart(2, '0');

  return `${year}/${month}/${day}`;
};

function InfoTime({city_id,}) {
  const {data} = useQuery({
    queryKey:["tourPackages"+city_id],
    enabled: city_id!= undefined,
    queryFn: async () => {
      const res = await axios.get(process.env.REACT_APP_BASE_URLL + "/tour/packages/" +city_id);
      return res.data
    } 
  })
  
  return (
    <section className="m-2 border border-3 p-2 rounded timeInfoContainer">
      {data&&data.tours.map(tourDetails => (
          <NavLink key={tourDetails.id} className="timeLink" to={tourDetails.path}>
            <Row className="align-items-center justify-content-between">
              <Col className="text-start">
                <h6>{formatDate(new Date(tourDetails.start_date))}</h6>
                <h6 className="fw-bold text-secondary1">{formatDate(new Date(tourDetails.start_date))}</h6>
                <h6>ساعت {new Date(tourDetails.start_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
              </Col>
              <Col xs={2} className="text-center">
                <HiArrowNarrowLeft fontSize="34px" color="#dee2e6" />
              </Col>
              <Col className="text-end">
                <h6>{formatDate(new Date(tourDetails.end_date))}</h6>
                <h6 className="fw-bold text-secondary1">{formatDate(new Date(tourDetails.end_date))}</h6>
                <h6>ساعت {new Date(tourDetails.end_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6>
              </Col>
            </Row>
          </NavLink>
        )
      )}
    </section>
  );
}

export default InfoTime;

