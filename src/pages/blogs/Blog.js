import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Col,Row } from "react-bootstrap";
import "./Blog.css"
import Loader from "../../components/loaders/Loader";


const Blog = () => {
    const { blogId } = useParams(); // Correct case for blogId
    const {isPending,data,error} = useQuery({
        queryKey:[blogId],
        enabled:blogId!=undefined,
        queryFn:async ()=>{
                const response = await axios.get(`process.env.REACT_APP_BASE_URL/blog/posts/${blogId}/`)
                return response.data
        }
    })
    if (error) {
        return <div>{error.message}</div>; // Display error message
    }
    if(isPending||data==undefined){
        return <Loader/>
    }

    return (
        <>
            <Col className="center">
                <Row className="center" xs={12} lg={4}>
                    <h1 className="Title">title</h1>
                </Row>
                <Row className="center" xs={12} lg={4}>
                    <img className="img-fluid blog-card-img" src={data.image} /> {/* Assuming content field exists */}
                </Row>
                <Row xs={12} lg={4}>
                </Row>
            </Col>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </>
    );
}

export default Blog;
