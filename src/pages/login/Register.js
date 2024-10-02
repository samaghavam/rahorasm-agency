import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Image, Form, Button, Alert } from "react-bootstrap";
import loginImg from "../../assets/images/login/beautiful-collage-travel-concept.jpg";
import useSignup from "../../hooks/signUp/useSignUp";
import useWindowDimensions from "../../hooks/useWindows/useWindows";

const USER_REGEX = /((0?9)|(\+?989))\d{9}/g;
const PWD_REGEX = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

const Register = () => {
    const {width,height}= useWindowDimensions()
    const [formSumbited,setFSubmit] = useState(false)
    const userRef = useRef();
    const mobileRef = useRef();
    const pwdRef = useRef();
    const matchPwdRef = useRef();
    const { signupUser, success } = useSignup(); // use the custom hook

    const [user, setUser] = useState({user:"",valid:false,errMsg:""});
    const [mobile,setMobile] = useState({mobile:"",valid:false,errMsg:""});
    const [pwd, setPwd] = useState({pwd:"",valid:false,match:"",ValidMatch:false,errMsg:""});
    const [errMsg, setErrMsg] = useState("");


    useEffect(() => {
        if (!USER_REGEX.test(mobile.mobile)) {
            setMobile({mobile:mobile.mobile, valid: false, errMsg: "شماره تلفن نا معتبر است" });
        } else {
            setMobile({mobile:mobile.mobile, valid: true, })
        }
    }, [mobile.mobile]);
    useEffect(()=>{
        if(!user.user || user.user.length === 0){
            setUser({user:user.user,valid:false,errMsg:"لطفاً نام کاربری را وارد کنید."})
        }else if (user.user && user.user.length < 3){
            setUser({user:user.user,valid:false,errMsg:"نام کاربری می بایست حداقل شامل سه حرف باشد."})
        }else{
            setUser({user:user.user,valid:true})
        }
    },[user.user])
    useEffect(() => {
        if(pwd.pwd!==pwd.match){
            setPwd({pwd:pwd.pwd,match:pwd.match,valid:false,ValidMatch:false,errMsg:"رمز عبور می بایست حداقل شامل 8 کاراکتر یک حرف بزرگ، یک حرف کوچک و یک عدد باشد"})
        } else if(!PWD_REGEX.test(pwd.pwd)){
            setPwd({valid:false,ValidMatch:false,pwd:pwd.pwd,match:pwd.match,errMsg:"با رمز عبور مطابقت ندارد."})
        }else{
            setPwd({valid:true,pwd:pwd.pwd,match:pwd.match,ValidMatch:true})
        }
    }, [pwd.pwd, pwd.match]);
    const handleKeyDown = (e, nextRef) => {
        setFSubmit(false)
        if (e.key === "Enter") {
            e.preventDefault();
            if (nextRef) {
                nextRef.current.focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFSubmit(true)
        console.log(pwd.valid,pwd.ValidMatch,user.valid,mobile.valid,PWD_REGEX.test(pwd.pwd),!pwd.valid&&!pwd.ValidMatch&&!user.valid&&!mobile.valid)
        console.log(pwd.pwd,pwd.match,user.user,mobile.mobile)
        console.log(pwd.errMsg,user.errMsg,mobile.errMsg)
        if(pwd.valid&&pwd.ValidMatch&&user.valid&&mobile.valid){
            signupUser(user.user, pwd.pwd,mobile.mobile,setErrMsg); 
        }
    };
    return (
        <>
            <section>
                <Container style={{ width: "60%" }}>
                    <Row className="justify-content-center g-0 " style={{ "height": "80vh",maxHeight:"100%" }}>
                        <Col className="px-4">
                            <h4 className="fw-bold text-center">ثبت نام</h4>
                            {errMsg==="" ?<></>:
                                <Alert variant="warning">{errMsg}</Alert>
                            }
                            <Form onSubmit={handleSubmit} noValidate validated={success}>
                                <Form.Label className="ps-2 pt-1">نام کاربری :</Form.Label>
                                <Form.Control
                                    autoComplete="off"
                                    className='form-controls1'
                                    type="text"
                                    ref={userRef}
                                    onChange={(e) => {
                                        setUser({user:e.target.value})
                                        setErrMsg("")
                                    }}
                                    value={user.user}
                                    isInvalid={!user.valid && formSumbited}
                                    onKeyDown={(e) => handleKeyDown(e,mobileRef)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {user.errMsg}
                                </Form.Control.Feedback>
                                <Form.Label className="ps-2 pt-1">شماره تماس:</Form.Label>
                                <Form.Control
                                    className='form-controls1'
                                    type="text"
                                    ref={mobileRef}
                                    autoComplete="mobile"
                                    onChange={(e) => {
                                        setMobile({mobile:e.target.value});
                                        setErrMsg("");
                                    }}
                                    value={mobile.mobile}
                                    isInvalid={!mobile.valid  && formSumbited}
                                    onKeyDown={(e) => handleKeyDown(e, pwdRef)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {mobile.errMsg}
                                </Form.Control.Feedback>
                                <Form.Group controlId="password">
                                    <Form.Label className="ps-2 pt-1">رمز عبور:</Form.Label>
                                    <Form.Control
                                        className='form-controls1'
                                        type="password"
                                        ref={pwdRef}
                                        onChange={(e) => {
                                            setPwd({pwd:e.target.value,match:pwd.match});
                                            setErrMsg("");
                                        }}
                                        autoComplete="new-password"
                                        value={pwd.pwd}
                                        isInvalid={!pwd.valid&& formSumbited}
                                        onKeyDown={(e) => handleKeyDown(e, matchPwdRef)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {pwd.errMsg}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="confirm_pwd">
                                    <Form.Label className="ps-2 pt-1">تکرار رمز عبور:</Form.Label>
                                    <Form.Control
                                        className='form-controls1'
                                        type="password"
                                        ref={matchPwdRef}
                                        onChange={(e) => {
                                            setPwd({pwd:pwd.pwd,match:e.target.value});
                                            setErrMsg("");
                                        }}
                                        value={pwd.match}
                                        autoComplete="new-password"
                                        isInvalid={!pwd.ValidMatch&& formSumbited}
                                        onKeyDown={(e) => handleKeyDown(e, null)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {pwd.errMsg}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button
                                    type="submit"
                                    className="btn-custome text-black w-100 card-style my-4"
                                >
                                    ثبت نام
                                </Button>
                            </Form>
                            <div className="d-flex justify-content-between">
                                <p>قبلا ثبت نام کرده اید؟</p>
                                <NavLink className="text-decoration-underline" to="/login">
                                    ورود
                                </NavLink>
                            </div>
                        </Col>
                            {width <= 420 ? <></> :
                                <Col style={{ "height": "100%" }}>
                                    <Image style={{ "width": "100%", "height": "100%", "objectFit": "cover" }} src={loginImg} />
                                </Col>
                            }
                    </Row>
                </Container>
            </section>
        </>
    );
};

// export default Register;
// 
// 
// 
// 
// 
// 
// 
// 
// 
// import React, { useState } from 'react';
// import { Alert } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Register.css';
// 
// const Register = () => {
    // const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate = useNavigate(); 
    // const [apiError, setApiError] = useState('');
// 
    // const onSubmit = async (data) => {
        // const apiUrl = 'http://5.161.155.143/auth/signup/request';
        // try {
            // const response = await axios.post(apiUrl, {
                // phone_number: data.phone_number,
                // password: data.password,
                // name: data.name,
            // }, {
                // headers: {
                    // 'Content-Type': 'application/json'
                // }
            // });
// 
            // if (response.status === 200) {
                // navigate('/temporyLogin', { state: { phone_number: data.phone_number } }); 
            // }
        // } catch (error) {
            // console.error('Error during signup:', error.response?.data || error.message);
            // setApiError(error.response?.data?.detail || 'ثبت نام انجام نشد. لطفا دوباره تکرار کنید.');
        // }
    // };
// 
    // return (
        // <div className='my-4 mx-auto text-center border rounded p-3 formContainer'>
            {/* {apiError && <p style={{ color: 'red' }}>{apiError}</p>} */}
            {/* <form className='p-4' onSubmit={handleSubmit(onSubmit)}> */}
                {/* <div className='d-flex flex-column'> */}
                    {/* <label  className='text-right labelForm' htmlFor="name">نام کاربری:</label> */}
                    {/* <input autoComplete="name" {...register("name", { required: "نام کاربری الزامی است" })} /> */}
                    {/* {errors.name && */}
                        // <Alert className='mt-4' variant="danger">
                            {/* {errors.name.message} */}
                        {/* </Alert>} */}
                {/* </div> */}
                {/* <div className='d-flex flex-column'> */}
                    {/* <label className='labelForm' htmlFor="phone_number">شماره تماس:</label> */}
                    {/* <input */}
                        // type="text"
                        // autoComplete='tel'
                        // {...register("phone_number", {
                            // required: "لطفا شماره تماس خود را وارد کنید",
                            // pattern: {
                                // value: /((0?9)|(\+?989))\d{9}/g,
                                // message: "شماره تماس نامعتبر است"
                            // }
                        // })}
                    // />
                    {/* {errors.phone_number && */}
                        // <Alert className='mt-4' variant="danger" >
                            {/* {errors.phone_number.message} */}
                        {/* </Alert>} */}
                {/* </div> */}
                {/* <div className='d-flex flex-column'> */}
                    {/* <label className='labelForm' htmlFor="password">رمز عبور:</label> */}
                    {/* <input */}
                        // type="password"
                        // autoComplete='new-password'
                        // {...register("password", {
                            // required: "رمز عبور را وارد نمایید",
                            // pattern: {
                                // value: /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/,
                                // message: "رمز عبور می بایست حداقل شامل 8 کاراکتر یک حرف بزرگ، یک حرف کوچک و یک عدد باشد"
                            // }
                        // })}
                    // />
                    {/* {errors.password && */}
                        // <Alert className='mt-4' variant="danger" >
                            {/* {errors.password.message} */}
                        {/* </Alert> */}
                    // }
                {/* </div> */}
                {/* <button className="btn-custome text-black w-100 card-style rounded my-4" type="submit">ادامه</button> */}
            {/* </form> */}
        {/* </div> */}
    // );
// };

export default Register;




