import { Row, Col } from "react-bootstrap";
import "./BlogCard.css";
import { Link } from "react-router-dom";

const BlogsCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog.id}`}>
      <section className="shadow border mb-3 rounded overflow-hidden ">
        <div className="d-flex align-center p-2">
          <Row>
            <Col xs={12} lg={4}>
              <img className="img-fluid blog-card-img" src={blog.image} alt={blog.meta_title} />
            </Col>
            <Col xs={12} lg={8} >
              <div className="p-3">
                <h5 className="py-2">{blog.title}</h5>
                <div className="text-secondary-emphasis" dangerouslySetInnerHTML={{__html:blog.content}}/>
                <button className="mx-1 fs-orders btn-custome border rounded">
                  ادامه مطلب
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Link>
  );
};

export default BlogsCard;
