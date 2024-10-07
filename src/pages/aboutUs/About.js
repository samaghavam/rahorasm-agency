import { Container, Row, Col, Image } from "react-bootstrap";
import aboutImg from "../../assets/images/about/about-bg.webp";
import HoverCards from "../../components/cards/hoverCards/HoverCards";
import { useEffect, useState } from 'react';
import "./About.css";
import axios from 'axios';
import TimeCard from "../../components/time/TimeCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loaders/Loader";

function About() {
    const {isPending,error,data:cardDatas} = useQuery({
        queryKey:["aboutUs"],
        queryFn:async()=>{
                // const res = await axios.get("http://5.161.155.143/api/aboutus/");
                const res = await axios.get("https://rahorasm.msdcorporation.top/aboutus/");

                return res.data
        }
    })
    if (isPending) return <Loader />;
    if (error) return <div>{error.message}</div>;

    return (
        <Container>
            <Row className="d-flex my-4 align-items-center about-container">
                <Col lg={7} className="p-5">
                    <h4 className="fw-bold"><span className='advise-title p-4'>چرا راه و رسم سفر؟</span></h4>
                    <h6 className="fw-bold py-3 text-justify text-color">آژانس هواپیمایی راه و رسم سفر با اخذ مجوزهای لازم از سازمان میراث فرهنگی و گردشگری در عرصه سفر و گردشگری گام موثری برداشته و در این سال ها همیشه رضایت کامل مسافران را مهمترین هدف خود قرار داده است. مدیریت و کادر اجرایی راه و رسم سفر با بهره گیری از سالها تجربه در عرصه گردشگری همواره در ارائه خدمات نوین پیش قدم بوده است. کارشناسان ما راهنمای شما در دریافت خدمات و امکانات گسترده در سراسر دنیا می باشند.</h6>
                    <TimeCard />
                </Col>
                <Col lg={5} className="p-5">
                    <Image src={aboutImg} fluid></Image>
                </Col>
            </Row>
            <Row className="g-4">
                {cardDatas&&cardDatas.map((cardData) => (
                    <Col lg={4} md={6} key={cardData.id}>
                        <HoverCards {...cardData} />
                    </Col>
                ))}    
            </Row>
        </Container>
    );
}

export default About;
