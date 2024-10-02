import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { FaPlaneDeparture } from "react-icons/fa6";

function Airline() {
  const [open, setOpen] = useState(true);

  return (
    <div className='card-style rounded p-3 my-3 bg-light'>
        <div className='d-flex justify-content-between align-items-center pe-2'>
            <h6>
                <span><FaPlaneDeparture /></span>
                <span className='ps-2'>ایرلاین</span>
            </h6>
            <Button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className='toggle-btn'
            >
                {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Button>
        </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
            <Form >
                {['checkbox'].map((type) => (
                    <div key={`reverse-${type}`} className="mb-3">
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label="ایران ایرتور"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >4</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label="قشم ایر"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >17</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label="معراج"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >11</p>
                        </div>
                    </div>
                ))}
            </Form>
        </div>
      </Collapse>
    </div>
  );
}

export default Airline;