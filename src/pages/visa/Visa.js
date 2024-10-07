import { Container, Row, Col, Accordion, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./Visa.css";
import visaImg from "../../assets/images/visa/visa-intro.webp";
import VisaSection from "../home/sections/visa-section/VisaSection";
import axios from "axios";
import TimeCard from "../../components/time/TimeCard";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

function Visa() {
    const [urlSearchParams,setUrlSearchParams]= useSearchParams()
    const [visaId,setVisaId]= useState()
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const {data:visaData,isPending} = useQuery({
        queryKey:[visaId],
        queryFn:async ()=>{
            let res = await axios.get(`https://rahorasm.msdcorporation.top/visa/visas/${visaId}`)
            return res.data
        }
    })
    console.log(visaData)
    useEffect(()=>{
        let vId = urlSearchParams.get("Visa")
        setVisaId(vId) 
    },[urlSearchParams])
    if (isPending) {
        return <div>Loading...</div>; // A simple loading indicator
    }

    return (
        <>
            <Container>
                {visaData&&
                    <Row key={visaData.id} className="align-items-center visa-bg">
                        <Col lg={7} className="p-5 visabg rounded shadow">
                            <h2 className="fw-bold py-3">مدارک مورد نیاز ویزای {visaData.title}</h2>
                            <h6 className="fw-bold text-justify lh-base">{visaData.description}</h6>
                        </Col>
                        <Col lg={5} className="text-center">
                            <Image src={visaImg} fluid />
                        </Col>
                    </Row>
                }
                <Row className="align-items-center">
                    <Col lg={7}>
                        <Accordion className="card-style rounded">
                            <Accordion.Item eventKey={visaData.id.toString()} key={visaData.id}>
                                <Accordion.Header>مدارک لازم برای اخذ ویزای {visaData.title}</Accordion.Header>
                                    <Accordion.Body>
                                    {visaData&&visaData.questions.map((question) => (
                                        <div key={question.id}>
                                            <strong>{question.question_text}</strong>: {question.answer_text}
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col lg={5}>
                        <VisaSection />
                        <TimeCard />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Visa;
