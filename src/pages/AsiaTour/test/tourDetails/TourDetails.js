import { Col, Container, Row } from "react-bootstrap";
import TourDates from "./detailFilter/tourDates/TourDates";
import InfoTime from "./TourTime/TimeInfo";
import "./TourTime/TimeInfo.css";
import DurationTime from "./TourTime/DurationTime";
import TimeCard from "../../../../components/time/TimeCard";
import HotelsTour from "./HotelsTour/HotelsTour";
import TourInformation from "./tourInformation/TourInfromation";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
function TourDetails() {
  const {tourId} = useParams()
  const {data}= useQuery({
    queryKey:["Tourd"+tourId],
    queryFn:async()=>{
      const res  = await axios.get(`https://rahorasm.msdcorporation.top/tour/tours/${tourId}`)
      return res.data
    }
  })
  return (
    <>
      <Container>
        <Row>
          <Col
            lg={3}
            className="d-none d-lg-block py-4 px-3 rounded border bg-light-subtle shadow "
          >
            <section className="d-flex justify-content-around">
              <h6 className="pt-1 btn-custome rounded text-light">رفت</h6>
              <h6 className="fw-bold">تاریخ تورها</h6>
              <h6 className="pt-1 btn-custome rounded text-light">برگشت</h6>
            </section>
            <div className="timeInfo border border-2 rounded">
              <InfoTime />
              {/* <InfoTime />
              <InfoTime />
              <InfoTime />
              <InfoTime /> */}
            </div>
            <DurationTime />
            <TimeCard />
          </Col>
          <Col lg={9}>
            <TourDates />
            <h4 className="fw-bold px-2 pt-4">لیست هتل ها و قیمت تورها</h4>
            <HotelsTour />
            <TourInformation />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default TourDetails;
