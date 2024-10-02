import { Row, InputGroup, Button, Form } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";
import BtnLoader from "../../../components/loaders/BtnLoader";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdPersonAdd } from "react-icons/io";
import { IoList } from "react-icons/io5";
import { HiPencilSquare } from "react-icons/hi2";
import { MdConnectWithoutContact } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import "./ContactForm.css";
import Swal from 'sweetalert2';


function ContactForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    phone: "",
    email: "",
  });

  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const descriptionRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    // Focus on the first input field when the component mounts
    nameRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors
    if (name === "phone") {
      setErrors({ ...errors, phone: "" });
    }
    if (name === "email") {
      setErrors({ ...errors, email: "" });
    }
  };

  const handleKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission
      if (nextRef.current) {
        nextRef.current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validation
    let isValid = true;
    const phoneRegex = /((0?9)|(\+?989))\d{9}/g;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "لطفا شماره همراه معتبر وارد نمایید",
      }));
      isValid = false;
    }

    if (!emailRegex.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "آدرس ایمیل معتبر نمی باشد" }));
      isValid = false;
    }

    if (isValid) {
      onSubmit(formData);
      setFormData(formData);
      // Show success message
      Swal.fire({
        icon: "success",
        title: "پیام شما با موفقیت ارسال شد",
        confirmButtonText: "باشه",
      });
    }

    setIsLoading(false);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="test-form rounded px-5 py-3 card-style"
    >
      <h5 className="py-2 ">
        <span className="pe-2">
          <MdConnectWithoutContact fontSize="2rem" />
        </span>
        <span>تماس با ما</span>
      </h5>
      <Form.Group>
        <Row className="d-flex gy-3 gx-0 justify-content-between align-items-center">
          <InputGroup>
            <InputGroup.Text>
              <IoMdPersonAdd />
            </InputGroup.Text>
            <Form.Control
              ref={nameRef}
              className="no-border"
              type="text"
              placeholder="نام و نام خانوادگی"
              autoComplete="off"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, phoneRef)}
              required
            />
          </InputGroup>
          <InputGroup>
            <InputGroupText>
              <FaPhoneFlip />
            </InputGroupText>
            <Form.Control
              ref={phoneRef}
              type="text"
              placeholder="شماره تماس"
              autoComplete="off"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, emailRef)}
              required
            />
          </InputGroup>
          {errors.phone && (
            <Form.Text className="text-danger">{errors.phone}</Form.Text>
          )}
          <InputGroup>
            <InputGroupText>
              <MdEmail />
            </InputGroupText>
            <Form.Control
              ref={emailRef}
              type="text"
              placeholder="آدرس ایمیل"
              autoComplete="off"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, subjectRef)}
              required
            />
          </InputGroup>
          {errors.email && (
            <Form.Text className="text-danger">{errors.email}</Form.Text>
          )}
          <InputGroup>
            <InputGroupText>
              <IoList />
            </InputGroupText>
            <Form.Select
              ref={subjectRef}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, descriptionRef)}
              required
            >
              <option value="">انتخاب موضوع</option>
              <option value="تورهای لحظه آخری">ثبت نام تورهای لحظه آخری</option>
              <option value="پیشنهادات">پیشنهادات</option>
              <option value="انتقادات">انتقادات</option>
            </Form.Select>
          </InputGroup>
          <InputGroup>
            <InputGroupText
              style={{
                display: "flex",
                alignItems: "start",
                padding: "7px 10px 5px 0px",
              }}
            >
              <HiPencilSquare />
            </InputGroupText>
            <Form.Control
              ref={descriptionRef}
              as="textarea"
              rows={4}
              placeholder="پیام خود را وارد کنید"
              autoComplete="off"
              name="description"
              value={formData.description}
              onChange={handleChange}
              onKeyDown={(e) => handleKeyDown(e, submitRef)}
            />
          </InputGroup>

          <div className="d-grid gap-2">
            <Button
              ref={submitRef}
              className="form-btn card-style"
              variant="info"
              type="submit"
            >
              {isLoading ? (
                <div className="d-flex justify-content-center">
                  <BtnLoader />
                </div>
              ) : (
                "ثبت"
              )}
            </Button>
          </div>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default ContactForm;
