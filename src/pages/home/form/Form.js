import { Row, Col, InputGroup, Button, Form } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import BtnLoader from "../../../components/loaders/BtnLoader";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { MdOutlineModeNight } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import FormResponse from "./FormResponse";
import AOS from 'aos';
import "./Form.css";

// LoadingOverlay component
const LoadingOverlay = ({ message }) => {
  return (
    <div className="loading-overlay">
      <div className="loading-message d-flex flex-column justify-content-center align-items-center">
        {message}
        <BtnLoader />
      </div>
    </div>
  );
};

const TripForm = () => {
  const [destination, setDestination] = useState("");
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const baseURL = "https://kelaasor.ir/other/ai.php?days=";
    const sourceURL = `${baseURL}${days}&destination=${destination}&budget=${budget}`;
    const source = new EventSource(sourceURL);

    source.onmessage = (event) => {
      try {
        const resp = JSON.parse(event.data);
        setResponse((prev) => {
          const newContent = resp.choices[0].delta.content;

          if (prev.length === 0) {
            return [newContent];
          } else {
            const concatenatedContent = prev[0] + newContent;
            return [concatenatedContent];
          }
        });
      } catch {
        source.close();
      } finally {
        setIsLoading(false);
        setBudget('');
        setDays('');
        setDestination('');
      }
    };
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="2" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="50">
      <Form className="test-form rounded px-5 py-3 card-style">
        <h5 className="py-2">
          <span className="pe-1">
            <FaPlaneDeparture />
          </span>
          <span>
            سفرت رو با ما برنامه ریزی کن
          </span>
        </h5>
        <Form.Group>
          <Row className="d-flex gy-3 gx-0 justify-content-between align-items-center">
            <Col xl={3}>
              <InputGroup>
                <InputGroup.Text>
                  <IoLocationOutline />
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="شهر مقصد"
                  id="destination"
                  autoComplete="off"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col xl={3}>
              <InputGroup>
                <InputGroupText>
                  <MdOutlineModeNight />
                </InputGroupText>
                <Form.Control
                  type="number"
                  placeholder="تعداد شب"
                  id="days"
                  autoComplete="off"
                  value={days}
                  onChange={(e) => setDays(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col xl={3}>
              <InputGroup>
                <InputGroupText>
                  <LiaFunnelDollarSolid />
                </InputGroupText>
                <Form.Control
                  type="number"
                  placeholder="قیمت از"
                  id="budget"
                  autoComplete="off"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col xl={2}>
              <div className="d-grid gap-2">
                <Button
                  onClick={handleSubmit}
                  className="form-btn card-style"
                  variant="info"
                  disabled={isLoading}
                  type="submit"
                >
                  {isLoading ? "جستجو ..." : "جستجو"}
                </Button>
              </div>
            </Col>
          </Row>
          <FormResponse response={response} />
        </Form.Group>
      </Form>
      {isLoading && (
        <LoadingOverlay message="در حال برنامه ریزی سفر..." />
      )}
    </div>
  );
};

export default TripForm;
