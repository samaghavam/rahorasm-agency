import { Container , Row, Col } from "react-bootstrap";
import FilterBtns from "../filterbuttons/FilterBtns";
import './ToursPlace.css'

import axios from 'axios';
import { useEffect, useState } from "react";
import TourCard from "../ToutCard";

function TurkeyTourist() {
    
    const [tour , setTour] = useState([]);
    const getToutData = async () => {
        try {
          const response = await axios.get("http://localhost:7000/TourDatas");
          setTour(response.data);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(()=>{
        getToutData();
    }, [])
  return (
    <>
      <Container>
        <h4 className="fw-bold py-4 text-center">جاذبه های گردشگری استانبول</h4>
        <FilterBtns />
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 py-2">
          {tour?.map((data) => (
            <Col>
              <TourCard key={data.id} data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default TurkeyTourist;
