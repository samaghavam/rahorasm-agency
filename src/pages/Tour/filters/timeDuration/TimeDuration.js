import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { FilterCTX } from '../../Tours';
import { Counter } from '../../../../utils';
import { set } from 'react-hook-form';

function TimeDuration() {
  const [open, setOpen] = useState(true);
  const {init,setDuration}=  useContext(FilterCTX)
  const [timesCount,setTimes] = useState({})
  const [checked,setChecked] = useState([])
  const handleChange=(event)=>{
    if(event.target.checked){
        setChecked([...checked,event.target.id])
        setDuration([...checked,event.target.id])
    }
    else{
        setChecked(checked.filter((v)=>v!==event.target.id))
        setDuration(checked.filter((v)=>v!==event.target.id))
    }
  }
  useEffect(()=>{
    if(init.toursDurations){
        let counter = Counter(init.toursDurations)
        setTimes(counter)
        setChecked(init.toursDurations)
    }
  },[init])
  useEffect(()=>{
    console.log(checked)
  },[checked])
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
                {Object.keys(timesCount)!=0&&Object.keys(timesCount).map((val,idx) => (
                    <div key={idx} className="mb-3">
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label={val}
                                className='text-body-secondary'
                                name="group1"
                                type="checkbox"
                                checked={checked.includes(val)}
                                onChange={handleChange}
                                id={val}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >{timesCount[val]}</p>
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