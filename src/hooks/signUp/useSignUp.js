import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; // to facilitate navigation
import axios from "axios";
import {getCookie} from "../../utils";

// const REGISTER_URL = "http://rahorasm.msdcorporation.top/auth/signup/request"; 

const REGISTER_URL = process.env.REACT_APP_BASE_URLL+"/auth/signup/request"; 
const csrftoken = getCookie('csrftoken');


const useSignup = () => {
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const signupUser = async (user, pwd,phone_number, setErrMsg) => {
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ "phone_number":phone_number, "password":pwd,"name":user }),
        {
          headers: { "Content-Type": "application/json",'X-CSRFToken': csrftoken },

          withCredentials: true,
        }
      );
      navigate("/temporyLogin",{state:{phone_number,pwd,user}}); // navigate to the OTP page
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      }else{ 
        console.log(err.response)
        setErrMsg(err.response.data.message);
      }  
    }
  };

  return { signupUser, success };
};

export default useSignup;
