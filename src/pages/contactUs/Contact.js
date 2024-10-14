import { Container, Row, Col, Image } from "react-bootstrap";
import ContactForm from "./contactForm/ContactForm";
import axios from 'axios';
import HoverCards from "../../components/cards/hoverCards/HoverCards";
import "./Contact.css";
import contactImg from "../../assets/images/contact/contact-hero.webp";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Contact(){
    const navigate = useNavigate()
    const {data:infoDatas}=useQuery({
        queryKey:["contactUs"],
        queryFn:async()=>{
            const res = await axios.get(process.env.REACT_APP_BASE_URL+"/api/contactus")
            return res.data
        }
    })

    const handleContactSubmit = async ({name,phone,email,subject,description}) => {
        let formdata={
            name: name,
            phone: phone,
            email: email,
            subject: subject,
            decription: description
        }
        console.log(formdata)
        const response = await axios.post(process.env.REACT_APP_BASE_URL+"/auth/contact-us", formdata);
        console.log(response.data)
        // naviagte("/")
        
    };

    return (
        <>
            <Container className="pt-5">
                <Row className="align-items-center">
                    <Col lg={6}>
                        <ContactForm onSubmit={handleContactSubmit} />
                    </Col>
                    <Col lg={6}>
                        <Image src={contactImg} fluid alt="Contact" />
                    </Col>
                </Row>
                <Row className="my-5">
                    {infoDatas&&infoDatas.map((infoData) => (
                        <Col lg={3} key={infoData.id}>
                            <HoverCards {...infoData} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
}

export default Contact;
