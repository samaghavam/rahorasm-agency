import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // to facilitate navigation
import axios from "axios";

// const REGISTER_URL = "http://5.161.155.143/auth/signup/request"; 

const REGISTER_URL = "https://rahorasm.msdcorporation.top/auth/signup/request"; 


const useSignup = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const signupUser = async (user, pwd,phone_number, setErrMsg) => {
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ "phone_number":phone_number, "password":pwd,"name":user }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setSuccess(true);
      navigate("/temporyLogin",{state:{phone_number,pwd,user}}); // navigate to the OTP page
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }else{ 
        console.log(err.response.data.message)
        setErrMsg(err.response.data.message);
      }  
    }
  };

  return { signupUser, success };
};

export default useSignup;
