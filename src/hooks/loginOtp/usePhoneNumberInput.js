import { useState, useRef, useEffect } from "react";
import axios from "axios";

const regexPattern = /^09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}$/;

export const usePhoneNumberInput = (baseUrl, onReceiveCode) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    setPhoneNumber(value);

    if (value.length === 0) {
      setError("لطفا شماره همراه خود را وارد نمایید");
    } else if (!regexPattern.test(value)) {
      setError("فرمت شماره همراه صحیح نیست");
    } else {
      setError("");
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    if (!error && regexPattern.test(phoneNumber)) {
      try {
        await axios.post(`${baseUrl}/auth/login/request`, { phoneNumber });
        onReceiveCode(phoneNumber);
      } catch (err) {
        setError("خطا در ارسال شماره. لطفا دوباره تلاش کنید.");
      }
    }
    setIsLoading(false); // Reset loading state after handling submission
  };

  return { phoneNumber, error, isLoading, userRef, handlePhoneChange, handleSubmit };
};
