// 








import { Col, Row } from "react-bootstrap";
import { FaRegFlag } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import "./TourDates.css";
import airplaneImg from "../../../../../../assets/images/travelDetails/Group 8.svg";
import { useEffect, useState } from "react";

function TourDates() {
  const [tourData, setTourData] = useState(null);
  
  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API URL
    fetch('http://5.161.155.143/tour/tours/')
      .then(response => response.json())
      .then(data => {
        // Assuming we want the first tour for simplicity
        if (data.length > 0) {
          setTourData(data[0]);
        }
      })
      .catch(error => console.error('Error fetching tour data:', error));
  }, []);

  if (!tourData) {
    return <div>در حال بارگذاری...</div>;
  }

  const {
    airline,
    origin_airport,
    destination_airport,
    start_date,
    end_date,
    // Add other fields as necessary
  } = tourData;

  const startDate = new Date(start_date).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });
  const endDate = new Date(end_date).toLocaleDateString('fa-IR', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="border rounded shadow py-2">
      <Row className="align-items-center">
        <Col xs={1}>
          <div className="p-3">
            <FaRegFlag fontSize="18px" />
          </div>
        </Col>
        <Col xs={10} className="d-flex align-items-center">
          <span className="px-3 text-primary1 fw-bold">شروع سفر:</span>
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{origin_airport.city.name} |</h6>
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{startDate}</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={4} lg={2} className="offset-lg-1">
          <div className="px-3">
            <h6 className="fw-bold">{origin_airport.short_name.toUpperCase()}</h6>
            <h6>{origin_airport.name}</h6>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={airplaneImg}
              className="airplaneImg"
              alt="airplane image"
            />
            <h6 className="time-title fw-bold">3 ساعت و 30 دقیقه</h6> {/* This should be calculated */}
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="px-3">
            <h6 className="fw-bold">{destination_airport.short_name.toUpperCase()}</h6>
            <h6>{destination_airport.name}</h6>
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="px-3 border-end border-start text-center">
            <h6 className="fw-bold">{airline.name}</h6>
            <img
              src="https://last-cdn.com//cdn/static/airlines/iranair--40x40xwt.png" // Replace with dynamic image if you have
              alt=""
            />
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="text-center">
            <h6 className="fw-bold">ساعت پرواز</h6>
            <h6>{startDate} - 06:30</h6> {/* Replace with actual flight times */}
          </div>
        </Col>
      </Row>
      {/* Landing Section */}
      <Row className="align-items-center my-2">
        <Col xs={1}>
          <div className="p-3 text-center">
            <SlLocationPin fontSize="22px" />
          </div>
        </Col>
        <Col xs={10} className="d-flex align-items-center">
          <span className="px-3 text-primary1 fw-bold">محل اقامت:</span>
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{destination_airport.city.name} |</h6>
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">4 شب</h6>
        </Col>
      </Row>
      {/* Return Section */}
      <Row>
        <Col xs={4} lg={2} className="offset-1">
          <div className="px-3">
            <h6 className="fw-bold">{destination_airport.short_name.toUpperCase()}</h6>
            <h6>{destination_airport.name}</h6>
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img
              src={airplaneImg}
              className="airplaneImg"
              alt="airplane image"
            />
            <h6 className="time-title fw-bold">3 ساعت و 30 دقیقه</h6> {/* This should be calculated */}
          </div>
        </Col>
        <Col xs={4} lg={2}>
          <div className="px-3">
            <h6 className="fw-bold">{origin_airport.short_name.toUpperCase()}</h6>
            <h6>{origin_airport.name}</h6>
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="px-3 border-end border-start text-center">
            <h6 className="fw-bold">{airline.name}</h6>
            <img
              src="https://last-cdn.com//cdn/static/airlines/iranair--40x40xwt.png" // Replace appropriately
              alt=""
            />
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="text-center">
            <h6 className="fw-bold">ساعت پرواز</h6>
            <h6>{endDate} - 12:40</h6> {/* Replace with actual return flight time */}
          </div>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs={1}>
          <div className="p-3 text-center">
            <FaRegFlag fontSize="18px" />
          </div>
        </Col>
        <Col xs={10} className="d-flex align-items-center">
          <span className="px-3 text-primary1 fw-bold">پایان سفر:</span>
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{origin_airport.city.name} |</h6>
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{endDate}</h6>
        </Col>
      </Row>
    </section>
  );
}

export default TourDates;
