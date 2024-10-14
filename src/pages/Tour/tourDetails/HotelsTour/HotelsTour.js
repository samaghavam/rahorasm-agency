import { Col, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { MdNightlight } from "react-icons/md";
import BedsHotel from "../bedsHotel/BedsHotel";

function HotelsTour() {
  return (
    <section className="p-3 border rounded shadow">
      <Row className="align-items-center">
        <Col xs={3}>
         <img src="https://last-cdn.com/2023/01/04/6TgjIy1BpnxY32a2PjKdiUqQjlHkQUGelr7x3oIx.jpg" className="img-fluid rounded" />

        </Col>
        <Col xs={3}>
            <h6 className="fw-bold py-3">Emmy Hotel Taksim</h6>
            <h6>BB</h6>
            <h6>استانبول</h6>
        </Col>
        <Col xs={3} className="offset-3 ">
            <p>
                <span><FaStar color="yellow"/></span>
                <span><FaStar color="yellow"/></span>
                <span><FaStar color="yellow"/></span>
            </p>
            <p className="bg-primary1 width-item py-2 rounded">
                <span>3</span>
                <span><MdNightlight /></span>
            </p>
        </Col>
      </Row>
      <BedsHotel />
    </section>
  );
}
export default HotelsTour;
