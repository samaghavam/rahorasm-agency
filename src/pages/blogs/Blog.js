import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Col,Row } from "react-bootstrap";
import "./Blog.css"
import Loader from "../../components/loaders/Loader";


const Blog = () => {
    const { blogId } = useParams(); // Correct case for blogId
    const [loading, setLoading] = useState(true); // For loading state
    const [data,setData]= useState()
    const [error,setError]= useState()
    useEffect(()=>{
        (async ()=>{
            try{
                const response = await axios.get(`https://rahorasm.msdcorporation.top/blog/posts/${blogId}/`)
                setData(response.data)
            }catch(e){
                setError(e)
            }
            setLoading(false)
        })()
    },[])
    useEffect(()=>{
        console.log(data,loading)
    },[data,loading])
    if (loading||data==undefined) {
        return <Loader />; // Loading state
    }

    if (error) {
        return <div>{error.message}</div>; // Display error message
    }

    return (
            <Col className="center">
                <Row className="center" xs={12} lg={4}>
                    <h1 className="Title">title</h1>
                </Row>
                <Row className="center" xs={12} lg={4}>
                    <img className="img-fluid blog-card-img" src={data.image} /> {/* Assuming content field exists */}
                </Row>
                <Row xs={12} lg={4}>
                    <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
                </Row>
            </Col>
    );
}

export default Blog;
