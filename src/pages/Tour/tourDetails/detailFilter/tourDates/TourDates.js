// 
import { Col, Row } from "react-bootstrap";
import { FaRegFlag } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import "./TourDates.css";
import airplaneImg from "../../../../../assets/images/travelDetails/Group 8.svg";
import { useEffect, useState } from "react";

const formatDate = (date) => {
  let year = date.getFullYear();
  let month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  let day = date.getDate().toString().padStart(2, '0');

  return `${year}/${month}/${day}`;
};
function TourDates({airline, origin_airport, destination_airport, start_date, end_date,image,duration}){
  const startDate = new Date(start_date)
  const endDate = new Date(end_date)

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
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{formatDate(startDate)}</h6>
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
            <h6 className="time-title fw-bold">{startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6> {/* This should be calculated */}
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
              src={image} 
              alt=""
            />
          </div>
        </Col>
        <Col xs={6} lg={2}>
          <div className="text-center">
            <h6 className="fw-bold">ساعت پرواز</h6>
            <h6>{formatDate(startDate)} - {startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6> {/* Replace with actual flight times */}
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
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{duration}</h6>
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
            <h6>{formatDate(endDate)} - {endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h6> {/* Replace with actual return flight time */}
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
          <h6 className="px-1 mb-0 fw-bold text-secondary-emphasis">{formatDate(endDate)}</h6>
        </Col>
      </Row>
    </section>
  );
}

export default TourDates;
