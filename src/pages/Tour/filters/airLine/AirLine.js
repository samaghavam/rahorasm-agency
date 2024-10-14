import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { MdModeNight } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import { FaPlaneDeparture } from "react-icons/fa6";
import { FilterCTX } from '../../Tours';
import {Counter} from "../../../../utils"
import { defaultFormat } from 'moment-jalaali';

function Airline() {
  const [open, setOpen] = useState(true);
  const {init,setAirline} = useContext(FilterCTX)
  const [airlineCount,setAirlineCount] = useState()
  const [checked,setChecked] =useState([])
  const handleChange = (event) => {
    if(event.target.checked){
        setAirline([...checked,event.target.id])
        setChecked([...checked,event.target.id])
    }
    else{
        setAirline(checked.filter((v)=>v!==event.target.id))
        setChecked(checked.filter((v)=>v!==event.target.id))
    }
  };
  useEffect(()=>{
    if(init.airline){
        setAirlineCount(Counter(init.airline))
        setChecked(init.airline)
    }
  },[init])

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
                {airlineCount&&Object.keys(airlineCount).length!=0&&Object.keys(airlineCount).map((name) => (
                    <div key={`reverse-checkbox`} className="mb-3">
                        <div className='d-flex justify-content-between align-items-center'>
                            <Form.Check
                                label={name}
                                className='text-body-secondary'
                                name="group1"
                                type="checkbox"
                                checked={checked.includes(name)}
                                onChange={handleChange}
                                id={name}
                            />
                            <p className='bg-primary1 text-light width-item rounded' >{airlineCount[name]}</p>
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