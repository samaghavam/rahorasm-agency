import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"

function TourCard({ data }) {
  return (
    <Link to={data.id}>
      <Card className="my-3">
        <Card.Img variant="top" src={data.image1} />
        <Card.Body>
          <Card.Title className="text-center">{data.title}</Card.Title>
          <Card.Text className="text-justify">{data.subDesc}</Card.Text>
          <Button className="mx-1 fs-orders btn-custome border">
            اطلاعات بیشتر
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default TourCard;
