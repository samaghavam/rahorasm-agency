import React from "react";
import { Button, Form } from "react-bootstrap";
import BtnLoader from "../../../components/loaders/BtnLoader";
import { usePhoneNumberInput } from "../../../hooks/loginOtp/usePhoneNumberInput"; // Import the custom hook

const PhoneNumberInput = ({ onReceiveCode, baseUrl }) => {
  const { phoneNumber, error, isLoading, userRef, handlePhoneChange, handleSubmit } = usePhoneNumberInput(baseUrl, onReceiveCode);

  return (
    <div className="mb-3 d-flex flex-column justify-content-center align-items-center">
      <Form.Group controlId="formPhoneNumber">
        <Form.Label className="text-secondary">
          شماره موبایل خود را وارد نمایید
        </Form.Label>
        <Form.Control
          type="text"
          value={phoneNumber}
          ref={userRef}
          onChange={handlePhoneChange}
          isInvalid={!!error}
          className="w-100 mb-3"
          dir="ltr"
        />
        <Form.Control.Feedback type="invalid" className="pb-4 px-2">{error}</Form.Control.Feedback>
      </Form.Group>
      <Button
        className="btn-custome w-100 card-style mb-2"
        type="button" // Change type to button to prevent form submission
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="d-flex justify-content-center mt-3">
            <BtnLoader />
          </div>
        ) : (
          "دریافت کد یکبار مصرف"
        )}
      </Button>
    </div>
  );
};

export default PhoneNumberInput;
