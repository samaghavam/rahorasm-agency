// import { useRef, useEffect, useState } from "react";
// import "./LoginTempCode.css";
// import { IoMdArrowRoundForward } from "react-icons/io";
// import { useNavigate, NavLink } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import axios from "axios"; 
// import PhoneNumberInput from "./optLogin/PhoneNumberInput";

// const LoginTempCode = () => {
//     const codesRef = useRef([]);
//     const [timer, setTimer] = useState(120);
//     const [isTimeFinished, setIsTimeFinished] = useState(false);
//     const [isCodeVisible, setIsCodeVisible] = useState(false);
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const navigate = useNavigate(); // Initialize useNavigate to navigate to Panel.js

//     useEffect(() => {
//         let countdown;
//         if (isCodeVisible) {
//             if (codesRef.current[0]) {
//                 codesRef.current[0].focus();
//             }

//             countdown = setInterval(() => {
//                 setTimer((prevTimer) => {
//                     if (prevTimer <= 1) {
//                         clearInterval(countdown);
//                         setIsTimeFinished(true);
//                         return 0;
//                     }
//                     return prevTimer - 1;
//                 });
//             }, 1000);
//         }

//         return () => clearInterval(countdown);
//     }, [isCodeVisible]);

//     const handleKeyDown = (e, idx) => {
//         if (e.key >= "0" && e.key <= "9") {
//             e.target.value = ""; // Clear the current input
//             setTimeout(() => {
//                 if (codesRef.current[idx + 1]) {
//                     codesRef.current[idx + 1].focus();
//                 }
//             }, 10);
//         } else if (e.key === "Backspace") {
//             setTimeout(() => {
//                 if (codesRef.current[idx - 1]) {
//                     codesRef.current[idx - 1].focus();
//                 }
//             }, 10);
//         } else {
//             e.preventDefault(); // Prevent invalid keys
//         }
//     };

//     const handleSubmit = async () => {
//         const enteredCode = codesRef.current.map(input => input.value).join("");
        
//         try {
//             const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/request`, { phoneNumber, code: enteredCode });
//             console.log("Response:", response.data);
            
//             // Navigate to the Panel after a successful response
//             navigate("/panel");
//         } catch (error) {
//             console.error("Error submitting code:", error);
//             // Handle error response here (could be a message to the user)
//         }
//     };

//     const formatTime = (seconds) => {
//         const minutes = Math.floor(seconds / 60);
//         const secs = seconds % 60;
//         return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
//     };

//     const handleReceiveCode = async (enteredPhoneNumber) => {
//         console.log("Received phone number:", enteredPhoneNumber);
//         setPhoneNumber(enteredPhoneNumber);
//         setIsCodeVisible(true);
        
//         // Send OTP request to the API with the new endpoint
//         try {
//             const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/request`, { phoneNumber: enteredPhoneNumber });
//             console.log("OTP sent:", response.data);
//         } catch (error) {
//             console.error("Error sending OTP: ", error);
//         }
//     };

//     return (
//         <section>
//             <div className="border rounded rounded-pill m-4 btn-custome card-style mb-2 d-inline-block">
//                 <NavLink to="/" className="text-black">
//                     <span><IoMdArrowRoundForward /></span>
//                     <span>بازگشت به سایت</span>
//                 </NavLink>
//             </div>
//             <div className="border rounded card-style bg-light p-5 mx-auto cardContainer">
//                 {!isCodeVisible ? (
//                     <PhoneNumberInput onReceiveCode={handleReceiveCode} />
//                 ) : (
//                     <>
//                         <h6 className="fw-bold text-center pb-3">
//                             کد ارسال شده به موبایل خود را وارد نمایید
//                         </h6>
//                         <div className="d-flex flex-row-reverse">
//                             {[...Array(4)].map((_, idx) => (
//                                 <input
//                                     key={idx}
//                                     ref={(el) => (codesRef.current[idx] = el)}
//                                     onKeyDown={(e) => handleKeyDown(e, idx)}
//                                     className="border rounded text-center"
//                                     maxLength="1"
//                                     disabled={isTimeFinished}
//                                 />
//                             ))}
//                         </div>
//                         {!isTimeFinished ? (
//                             <>
//                                 <Button onClick={handleSubmit} className="card-style btn-custome mt-4 w-100">ادامه</Button>
//                                 <div className="mt-4 border p-2 rounded bg-white">
//                                     {formatTime(timer)}
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 <Button className="card-style btn-custome mt-4 w-100">بازیابی مجدد کد تایید</Button>
//                                 <div className="mt-4 text-light-emphasis p-2 ">
//                                     زمان شما به پایان رسیده است.
//                                 </div>
//                             </>
//                         )}
//                     </>
//                 )}
//             </div>
//         </section>
//     );
// };

// export default LoginTempCode;














import { useRef, useEffect, useState } from "react";
import "./LoginTempCode.css";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useNavigate, useLocation, NavLink, redirect, json } from "react-router-dom";
import { Button,Alert } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify"; 

const LoginTempCode = () => {
    const codesRef = useRef([]);
    const [timer, setTimer] = useState(120);
    const [isTimeFinished, setIsTimeFinished] = useState(false);
    const [isCodeVisible, setIsCodeVisible] = useState(false);
    const [fail,setFail ]= useState({failed:false,errorMessage:""})
    const navigate = useNavigate();
    const location = useLocation();
    const { phone_number, pwd,user } = location.state;
    const interceptorRef = useRef(null); // Store interceptor reference

    useEffect(() => {
        console.log(phone_number,pwd,user)
        // Use an interceptor for logging or any other purpose
        interceptorRef.current = axios.interceptors.request.use(request => {
            return request;
        });
        if (location.state) {
            setIsCodeVisible(true);
            let countdown = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer <= 1) {
                        clearInterval(countdown);
                        setIsTimeFinished(true);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
            return () => {
                clearInterval(countdown);
                // Eject the interceptor when the component unmounts
                if (interceptorRef.current) {
                    axios.interceptors.request.eject(interceptorRef.current);
                }
            };
        }
        else{
            navigate("/register")
        }
    }, [location.state]);

    const handleKeyDown = (e, idx) => {
        console.log(idx)
        setFail({failed:false})
        if (e.key >= "0" && e.key <= "9") {
            e.preventDefault();
            codesRef.current[idx].value = e.key;
            if (codesRef.current[idx + 1]) {
                codesRef.current[idx + 1].focus();
            }
        } else if (e.key === "Backspace") {
            e.preventDefault();
            if (idx > 0) {
                codesRef.current[idx].value="";
                codesRef.current[idx - 1].focus();
            }
        } else if (e.key === "Enter") {
            handleSubmit();
        } else {
            e.preventDefault();
        }
    };

    const handleSubmit = async () => {
        let enteredCode = "";
        let valid =true
        codesRef.current.forEach(input => {
            if (input.value != "") {
                enteredCode += input.value;
                input.value = ""
            } else {
                valid = false
            }
        });
        console.log(enteredCode)
        if(valid){
            try {
                const response = await axios.post(process.env.REACT_APP_BASE_URL+'/auth/signup/validate', {
                    phone_number:phone_number,
                    otp: enteredCode
                });
                if (response.status==200||response.status==201) {
                    document.cookie += `active=true; path=/`; // Set access token cookie
                    navigate("/panel"); 
                }
            } catch (error) {
                if(error.status==500){
                    setFail({failed:true,errorMessage:"خطایی در سرور رخ داد لطفا مجددا امتحان کنید"})
                }else{
                    setFail({failed:true,errorMessage:error.response.data.message})
                }
            }
        }
    };

    const handleResendCode = async () => {
        // Reset input fields
        codesRef.current.forEach(input => {
            input.value = '';
        });

        try {
            await axios.post('http://rahorasm.msdcorporation.top/auth/signup/request',
                JSON.stringify({
                    "phone_number": phone_number,
                    "password":pwd,
                    "name":user
                }),{
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
        );
            // Reset timer and state to allow the user to try again
            setIsTimeFinished(false);
            setTimer(120);
            // You can remove the line below if you're not adding any new interceptors
            // axios.interceptors.request.eject(interceptor);
        } catch (error) {
            setFail({failed:true,errorMessage:error.response.data.message})
        }
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    return (
        <section>
            <div className="border rounded rounded-pill m-4 btn-custome card-style mb-2 d-inline-block">
                <NavLink to="/" className="text-black">
                    <span><IoMdArrowRoundForward /></span>
                    <span>بازگشت به سایت</span>
                </NavLink>
            </div>
            <div className="border rounded card-style bg-light  mx-auto cardContainer">
                <h6 className="fw-bold text-center pb-3 m-5">
                    کد ارسال شده به موبایل خود را وارد نمایید
                </h6>
                <div className="d-flex flex-row-reverse optContainer">
                    {[...Array(6)].map((_, idx) => (
                            <input
                                key={idx}
                                ref={(el) => (codesRef.current[idx] = el)}
                                onKeyDown={(e) => handleKeyDown(e, idx)}
                                className="border mx-1 rounded text-center"
                                disabled={isTimeFinished}
                            />
                    ))}
                </div>
                {fail.failed ?
                    <Alert className="mt-2" variant="danger">{fail.errorMessage}</Alert> :<></>
                }
                {!isTimeFinished ? (
                    <>
                        <Button onClick={handleSubmit} className="card-style btn-custome my-4 w-80">ادامه</Button>
                        <div className="my-4 border p-2 rounded bg-white">
                            {formatTime(timer)}
                        </div>
                    </>
                ) : (
                    <Button onClick={handleResendCode} className="card-style btn-custome  my-4 w-80">بازیابی مجدد کد تایید</Button>
                )}
            </div>
        </section>
    );
};

export default LoginTempCode;





