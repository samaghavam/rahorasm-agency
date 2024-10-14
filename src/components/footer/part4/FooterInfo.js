import { MdAccessTimeFilled } from "react-icons/md";
import { FaPhoneFlip, FaMobileScreenButton, FaEnvelope} from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col"
import axios from "axios";
import {useQuery} from "@tanstack/react-query"
import Loader from "../../loaders/Loader";
function FooterInfo(){
    const { isPending, error, footerInfo, isFetching } = useQuery({
        queryKey: ['DBInfo'],
        queryFn: async () => {
            const response = await axios.get(
                '/db.json',
            )
            return response.data
        },
    })
    return(
        <Col md={6} lg={3}>
            <div className="contact-box text-light">
                <h4 className="text-center text-white py-3 border-bottom border-2">ارتباط با ما</h4>
                {isPending?<Loader/>:(
                    footerInfo && footerInfo.map((info, index) => (
                        <div className="contact-box text-light" key={index}>
                            <h6 className="pt-2">
                                {info.icon === 'IoLocationSharp' && <IoLocationSharp fontSize='1.1rem' color="white" />}
                                {info.icon === 'MdAccessTimeFilled' && <MdAccessTimeFilled fontSize='1.1rem' color="white" />}
                                {info.icon === 'FaPhoneFlip' && <FaPhoneFlip fontSize='1.1rem' color="white" />}
                                {info.icon === 'FaMobileScreenButton' && <FaMobileScreenButton fontSize='1.1rem' color="white" />}
                                {info.icon === 'FaEnvelope' && <FaEnvelope fontSize='1.1rem' color="white" />}
                                <span className="ps-2 text-white">{info.title}{(index >= 2 && index <= 5) && ` : ${info.desc}`}</span>
                            </h6>
                            {(index < 2) && <p className="text-white">{info.desc}</p>}
                        </div>
                    ))
                )}
                <hr />
                <div className="text-center text-white">
                    <RiInstagramFill fontSize='1.7rem' className="m-3 text-light" />
                    <BsTelegram fontSize='1.7rem' className="m-3 text-light" />
                    <IoLogoWhatsapp fontSize='1.7rem' className="m-3 text-light" />
                </div>
            </div>  
        </Col>
    )
}
export default FooterInfo;