import React, { useRef, useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import "./Tabstravels.css";

function TabsTravel() {
  const [activeKey, setActiveKey] = useState("link-1"); // Default active key

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  return (
    <Container id='tabs-travel' className='my-3'>
      <Row>
        <Col lg={4}>
          <Nav defaultActiveKey="/home" className="flex-column d-inline-block" activeKey={activeKey} onSelect={handleSelect}>
            <Nav.Link eventKey="link-1"  className='card-style rounded active-btn m-2 btn-custome text-light'>سفر به استانبول با راه و رسم سفر</Nav.Link>
            <Nav.Link eventKey="link-2" className='card-style rounded active-btn m-2 btn-custome text-light'>بهترین زمان سفر به استانبول</Nav.Link>
            <Nav.Link eventKey="link-3" className='card-style rounded active-btn m-2 btn-custome text-light'>مزایا و معایب تور لحظه آخری استانبول</Nav.Link>
            <Nav.Link eventKey="link-4" className='card-style rounded active-btn m-2 btn-custome text-light'>جاذبه های توریستی استانبول</Nav.Link>
          </Nav>
        </Col>
        <Col lg={6} className='bg-light p-3 border border-end-0 rounded-start'>
          {/* Content based on the active key */}
          {activeKey === "link-1" && <div>Content for link-1</div>}
          {activeKey === "link-2" && <div>
            <p className='text-justify'>آژانس مسافرتی راه و رسم سفر تورهای استانبول و همچنین تور لحظه آخری و ارزان استانبول را به نحوی برای مسافران خود برنامه ریزی کرده است تا با کمترین هزینه و بیشترین و بهترین امکانات و خدمات، سفری رویایی و فوق العاده را برای آنها رقم بزند.
            <br /><br />
            شما می توانید با انتخاب و رزرو تور استانبول از آژانس مسافرتی راه و رسم سفر، با صرف هزینه ای کم، بیشترین لذت را از سفرتان ببرید. راه و رسم سفر لیست قیمت های بسیار متفاوتی را به مسافران ارائه می کند تا بتوانند با توجه به خواسته و نیازشان و همچنین با در نظر گرفتن بودجه بهترین انتخاب را داشته باشند. قیمت تور استانبول با توجه به نوع هتل انتخابی، نوع ایرلاین و همچنین نوع کلاس پروازی و دیگر خدمات و امکانات فراهم شده در تورها متغیر می باشد.</p>
          </div>}
          {activeKey === "link-3" && <div>Content for link-3</div>}
          {activeKey === "link-4" && <div>Content for link-4</div>}
        </Col>
        <Col lg={2} className='bg-tab p-2 bg-light rounded-end border border-start-0'></Col>
      </Row>
    </Container>
  );
}

export default TabsTravel;
