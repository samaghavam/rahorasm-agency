import React, { useContext, useRef, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import "./Tabstravels.css";
import { FilterCTX } from '../../pages/Tour/Tours';

function TabsTravel() {
  const [activeKey, setActiveKey] = useState("link-1"); // Default active key
  const {init} = useContext(FilterCTX)

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <Container id='tabs-travel' className='my-3'>
      <Row>
        <Col lg={4}>
          <Nav defaultActiveKey="/home" className="flex-column d-inline-block" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Link eventKey="link-1"  className='card-style rounded active-btn m-2 btn-custome text-light'>سفر به {init.name} با راه و رسم سفر</Nav.Link> 
            <Nav.Link eventKey="link-2" className='card-style rounded active-btn m-2 btn-custome text-light'>بهترین زمان سفر به {init.name}</Nav.Link>
            <Nav.Link eventKey="link-3" className='card-style rounded active-btn m-2 btn-custome text-light'>مزایا و معایب تور لحظه آخری {init.name}</Nav.Link>
            <Nav.Link eventKey="link-4" className='card-style rounded active-btn m-2 btn-custome text-light'>جاذبه های توریستی {init.name}</Nav.Link>
          </Nav>
        </Col>
        <Col lg={6} className='bg-light p-3 border border-end-0 rounded-start'>
          {/* Content based on the active key */}
          {activeKey === "link-1" && <div dangerouslySetInnerHTML={{"__html":init.link1}}></div>}
          {activeKey === "link-2" && <div dangerouslySetInnerHTML={{"__html":init.link2}}></div>}
          {activeKey === "link-3" && <div dangerouslySetInnerHTML={{"__html":init.link3}}></div>}
          {activeKey === "link-4" && <div dangerouslySetInnerHTML={{"__html":init.link4}}></div>}
        </Col>
        <Col lg={2} className='bg-tab p-2 bg-light rounded-end border border-start-0'></Col>
      </Row>
    </Container>
  );
}

export default TabsTravel;
