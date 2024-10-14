import { useEffect, useState,useRef } from "react";
import { InputGroup, Button, Form } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import BtnLoader from "../../../../components/loaders/BtnLoader";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select"
import axios from "axios"
import { useNavigate } from "react-router-dom";
function VisaSection(){
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate()
    const {data,isPending} = useQuery({
      queryKey:["Visas"],
      queryFn:async ()=>{
        const response =await axios.get(process.env.REACT_APP_BASE_URL+"/visa/visas/") 
        return response.data
      }
    })
    const [countery,setCountery]=useState([])
    useEffect(()=>{
      if(data){
        setCountery(data.map((c,i)=>{return {value:c.id,label:c.title}}))
        console.log(data.map((c)=>c.title))
      }
        console.log(countery)
    },[data])
    const [isLoading , setIsLoading]= useState(false);
    return(
        <div className="pt-2 pb-4 px-1">
          <Form className=" test-form rounded px-5 py-3 card-style">
            <h5 className="fw-bold text-center">ویزای سفر</h5>
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={countery.length>0?countery[0]:"ویزا موجود نیست"}
            options={countery}
            isDisabled={false}
            isLoading={isPending}
            isClearable={false}
            isSearchable={true}
            onChange={setSelectedOption}
            placeholder={
              <div>
                <IoLocationOutline />
                کشور مقصد
              </div>
              }
            name="Visa"
          />
            <Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      className="form-btn mt-3 card-style"
                      variant="info"
                      onClick={()=>{
                        if (selectedOption) {
                          navigate(`/visa/?Visa=${selectedOption.value}`)
                        }}}>
                        {isLoading ? (
                            <div className="d-flex justify-content-center"><BtnLoader /></div>) : ("جستجو")}
                    </Button>
                  </div>
            </Form.Group>
          </Form>
        </div>
    )
}
export default VisaSection;