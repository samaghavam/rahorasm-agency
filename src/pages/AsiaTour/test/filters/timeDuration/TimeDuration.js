import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import Form from 'react-bootstrap/Form';

function TimeDuration() {
  const [open, setOpen] = useState(true);

  return (
    <div className='bg-light card-style rounded p-3'>
        <div className='d-flex justify-content-between align-items-center pe-2'>
            <h6>
                <span><MdModeNight /></span>
                <span className='ps-2'>مدت اقامت</span>
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
                                label="2 شب"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >19</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label="3 شب"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >8</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label="6 شب"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >10</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label="5 شب"
                                className='text-body-secondary'
                                name="group1"
                                type={type}
                                id={`reverse-${type}-1`}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >4</p>
                        </div>

                    </div>
                ))}
            </Form>
        </div>
      </Collapse>
    </div>
  );
}

export default TimeDuration;