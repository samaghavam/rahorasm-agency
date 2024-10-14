import { Row, Col } from "react-bootstrap";

function BedsHotel(){
    return(
        <Row>
            <Col xs={6} lg={3}>
                <div>
                    <p className="px-4 mt-3 text-center fw-bold rounded-pill py-2 bg-secondary-subtle">2 تخته (هرنفر)</p>
                    <p className="text-center">16/600/000 تومان</p>
                </div>
            </Col>
            <Col xs={6} lg={3}>
                <div>
                    <p className="px-4 mt-3 text-center fw-bold rounded-pill py-2 bg-secondary-subtle">1 تخته (هرنفر)</p>
                    <p className="text-center">16/600/000 تومان</p>
                </div>
            </Col>
            <Col xs={6} lg={3}>
                <div>
                    <p className="px-4 mt-3 text-center fw-bold rounded-pill py-2 bg-secondary-subtle">کودک با تخت (هرنفر)</p>
                    <p className="text-center">16/600/000 تومان</p>
                </div>
            </Col>
            <Col xs={6} lg={3}>
                <div>
                    <p className="px-4 mt-3 text-center fw-bold rounded-pill py-2 bg-secondary-subtle">کودک بدون تخت (هرنفر)</p>
                    <p className="text-center">16/600/000 تومان</p>
                </div>
            </Col>
        </Row>
    )
}
export default BedsHotel;