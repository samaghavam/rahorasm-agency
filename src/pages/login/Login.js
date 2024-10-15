import { useRef, useState, useEffect } from "react";
import { Container, Col, Row, Image, Button, Form, Alert } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import BtnLoader from "../../components/loaders/BtnLoader";
import loginImg from "../../assets/images/login/beautiful-collage-travel-concept.jpg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const userRef = useRef();
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      return; // Prevent submission if form is invalid
    }

    // Clear previous messages
    setErrorMessage("");
    setSuccessMessage("");

    const userCredentials = {
      username,
      password,
      expiresInMins: 30, // Optional, defaults to 60
    };

    // Set loading state to true before the fetch call
    setIsLoading(true);

    try {
      const response = await fetch(process.env.REACT_APP_BASE_URLL+"/auth/login/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "ورود انجام نشد");
      }

      setSuccessMessage("ورود موفقیت آمیز بود!");
      navigate('/panel');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      // Set loading state to false after the fetch call is complete
      setIsLoading(false);
    }
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center g-0">
          <Col lg={4} className="px-4 form-right">
            <h4 className="fw-bold text-center py-5">ورود به حساب کاربری</h4>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group id="user-name" className="mb-3" controlId="validationCustom01">
                <Form.Label className="text-secondary">
                  شماره تماس خود را وارد نمایید
                </Form.Label>
                <Form.Control
                  type="text"
                  className='form-controls1'
                  ref={userRef}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  لطفا یک شماره همراه معتبر وارد نمایید
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="text-secondary">رمز عبور</Form.Label>
                <Form.Control
                  className='form-controls1'
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  رمز عبور اشتباه است.
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                className="btn-custome w-100 card-style mb-2"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <BtnLoader />
                ) : (
                  "ثبت و ادامه"
                )}
              </Button>
              <NavLink
                to="/temporyLogin"
                className="text-center text-decoration-underline lh-lg"
              >
                ورود با کد یکبار مصرف
              </NavLink>
            </Form>
            <div className="mt-3 d-flex justify-content-between">
              <p>قبلا ثبت نام نکرده اید؟</p>
              <NavLink className="text-decoration-underline" to="/register">
                ثبت نام کنید
              </NavLink>
            </div>
          </Col>
          <Col lg={4} className="form-left">
            <Image src={loginImg} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
