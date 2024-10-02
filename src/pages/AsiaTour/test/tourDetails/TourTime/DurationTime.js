// import { Col, Row } from "react-bootstrap";

// function DurationTime() {
//   return (
//     <section className="card-style border mt-3 border border-2 border-dark rounded py-4 px-2">
//       <Row>
//         <Col className="text-center border-end">
//           <h6 className="fw-bold">مدت اقامت</h6>
//           <h6 className="fw-bold text-secondary">3 شب</h6>
//         </Col>
//         <Col className="text-center">
//           <h6 className="fw-bold">قیمت از:</h6>
//           <h6 className="fw-bold text-secondary">22/200/000 تومان</h6>
//         </Col>
//       </Row>
//     </section>
//   );
// }
// export default DurationTime;






import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function DurationTime() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://5.161.155.143/tour/packages/"); // Replace with your API URL
        const result = await response.json();

        // Assuming we want the first item in the result array
        if (result && result.length > 0) {
          setData(result[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Fallback while loading data
  }

  const { tour_duration, price } = data;

  return (
    <section className="card-style border mt-3 border border-2 border-dark rounded py-4 px-2">
      <Row>
        <Col className="text-center border-end">
          <h6 className="fw-bold">مدت اقامت</h6>
          <h6 className="fw-bold text-secondary">{tour_duration}</h6>
        </Col>
        <Col className="text-center">
          <h6 className="fw-bold">قیمت از:</h6>
          <h6 className="fw-bold text-secondary">{Number(price).toLocaleString()} تومان</h6>
        </Col>
      </Row>
    </section>
  );
}

export default DurationTime;

