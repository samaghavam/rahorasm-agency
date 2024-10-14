import "./Blogs.css"
import { Container, Row, Col } from "react-bootstrap";
import BlogsLink from "./BlogsLink";
import BlogsCard from "./BlogsCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function Blogs() {
  const [searchParams,setSearchParams] = useSearchParams()
  const [blogs,setBlogs] = useState({})
  const {isPending,data,error} = useQuery({
    queryKey:["blogs"],
    queryFn:async()=>{
      const res= await axios.get(process.env.REACT_APP_BASE_URL+"/blog/posts/");
      return res.data
    }
  })
  useEffect(()=>{
    const query = searchParams.get("q")
    if(data==undefined){
      setBlogs({})
    }else if(query===""||query===undefined){
      setBlogs(data)
    }else{
      setBlogs(data.filter((blog) => { return blog.Category.filter((cat) => { return (cat.title.includes(query) || cat.title.includes("دسته بندی نشده")) }) }))
    }
  },[searchParams,data])
  if (isPending){
    return(
      <Container>
        <Row className="mt-4">
          <Col lg={3}>
            <BlogsLink />
          </Col>
          <Col className="mt-2" lg={9}>
            {[1,2,3].map((blog,idx)=>(
              <div className="box shine" key={idx}></div>
            ))}
          </Col>
        </Row>
      </Container>
      )
  } 
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col lg={3}>
            <BlogsLink />
          </Col>
          <Col className="mt-2" lg={9}>
            {blogs.length>0&&blogs.map((blog)=>(
                <BlogsCard key={blog.id} blog={blog}/>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Blogs;
