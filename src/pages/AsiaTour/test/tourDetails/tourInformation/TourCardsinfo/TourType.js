// import Tab from "react-bootstrap/Tab";
// import Tabs from "react-bootstrap/Tabs";
// import Card from "react-bootstrap/Card";
// import { BsAirplane } from "react-icons/bs";
// import { IoDocumentTextOutline } from "react-icons/io5";
// import { RiCustomerService2Line } from "react-icons/ri";
// import { IoMdCheckboxOutline } from "react-icons/io";
// import './NavTabsInfo.css'

// function NavTabsInfo() {
//   return (
//     <Card className="shadow py-2">
//       <Tabs
//         defaultActiveKey="profile"
//         id="uncontrolled-tab-example"
//         className="mb-3"
//       >
//         <Tab eventKey="home" title="نوع سفر">
//           <p className="ps-3">
//             <span>
//               <BsAirplane fontSize="18px" />
//             </span>
//             <span className="ps-2">هوایی</span>
//           </p>
//         </Tab>
//         <Tab eventKey="profile" title="مدارک لازم">
//           <p className="ps-3">
//             <span>
//               <IoDocumentTextOutline fontSize="18px" />
//             </span>
//             <span className="ps-2">پاسپورت حداقل 7 ماه اعتبار</span>
//           </p>
//         </Tab>
//         <Tab eventKey="contact" title="خدمات آژانس">
//           <p className="ps-3">
//             <span>
//               <RiCustomerService2Line fontSize="18px" />
//             </span>
//             <span className="ps-2">بلیط رفت و برگشت</span>
//             <br />
//             <span className="ps-4">ترانسفر فرودگاهی</span>
//             <br />
//             <span className="ps-4">راهنمای فارسی زبان</span>
//             <br />
//             <span className="ps-4">بیمه مسافرتی</span>
//             <br />
//             <span className="ps-4">گشت نیم روز خرید</span>
//             <br />
//             <span className="ps-4">3 شب اقامت در هتل با صبحانه</span>
//           </p>
//         </Tab>
//         <Tab eventKey="description" title="توضیحات">
//           <div className="px-4">
//             <h5 className="text-danger fw-bold">به علت نوسانات نرخ ارز، پکیج ها را با کانتر مربوطه چک کنید.</h5>
//             <p>
//               آژانس مسافرتی راه و رسم سفر آماده ارائه بهترین خدمات مسافرتی با
//               نازل ترین قیمت برای شما عزیزان می باشد. شما می توانید با انتخاب
//               تور استانبول 3 شب و 4 روز یک سفر به یاد ماندنی برای خود رقم بزنید.
//             </p>
//             <p className="fw-bold">آنچه که باید درباره تور استانبول بدانید:</p>
//             <p className="text-body-secondary">
//                 <span><IoMdCheckboxOutline /></span>
//                 <span className="ps-2">مسئولیت کنترل پاسپورت به عهده آژانس درخواست کننده میباشد.</span>
//             </p>
//             <p className="text-body-secondary">
//                 <span><IoMdCheckboxOutline /></span>
//                 <span className="ps-2">هنگام ثبت نام دریافت 70% مبلغ الزامی است.</span>
//             </p>
//             <p className="text-body-secondary">
//                 <span><IoMdCheckboxOutline /></span>
//                 <span className="ps-2">نرخ کودک زیر 2 سال 990.000 تومان می باشد.</span>
//             </p>
//           </div>
//         </Tab>
//         <Tab eventKey="tourRes" title="مسئولین تور">
//           <p className="ps-3">
//             <span>
//               <IoMdCheckboxOutline fontSize="18px" />
//             </span>
//             <span className="ps-2">مهدی افراسیابی</span>
//           </p>
//           <p className="ps-3">
//             <span>
//               <IoMdCheckboxOutline fontSize="18px" />
//             </span>
//             <span className="ps-2">آنا حبیبی</span>
//           </p>
//         </Tab>
//       </Tabs>
//     </Card>
//   );
// }

// export default NavTabsInfo;












import React, { useEffect, useState } from 'react';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { BsAirplane } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoMdCheckboxOutline } from "react-icons/io";
import './NavTabsInfo.css';

function NavTabsInfo() {
  const [tourData, setTourData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const response = await fetch('https://rahorasm.msdcorporation.top/tour/tours/'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTourData(data[0]); // Assuming you want the first item
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTourData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Card className="shadow py-2">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="نوع سفر">
          <p className="ps-3">
            <span>
              <BsAirplane fontSize="18px" />
            </span>
            <span className="ps-2">{tourData.airline.name}</span>
          </p>
        </Tab>
        <Tab eventKey="profile" title="مدارک لازم">
          <p className="ps-3">
            <span>
              <IoDocumentTextOutline fontSize="18px" />
            </span>
            <span className="ps-2">{tourData.needed_documents}</span>
          </p>
        </Tab>
        <Tab eventKey="contact" title="خدمات آژانس">
          <p className="ps-3">
            <span>
              <RiCustomerService2Line fontSize="18px" />
            </span>
            <span className="ps-2">{tourData.agency_service.split('\n').map((service, index) => (
              <div key={index} className="ps-4">{service}</div>
            ))}</span>
          </p>
        </Tab>
        <Tab eventKey="description" title="توضیحات">
          <div className="px-4">
            <h5 className="text-danger fw-bold">به علت نوسانات نرخ ارز، پکیج ها را با کانتر مربوطه چک کنید.</h5>
            <p>{tourData.description}</p>
            <p className="fw-bold">آنچه که باید درباره تور بدانید:</p>
            <p className="text-body-secondary">
              <span><IoMdCheckboxOutline /></span>
              <span className="ps-2">مسئولیت کنترل پاسپورت به عهده آژانس درخواست کننده می باشد.</span>
            </p>
            <p className="text-body-secondary">
              <span><IoMdCheckboxOutline /></span>
              <span className="ps-2">هنگام ثبت نام دریافت 70% مبلغ الزامی است.</span>
            </p>
            <p className="text-body-secondary">
              <span><IoMdCheckboxOutline /></span>
              <span className="ps-2">نرخ کودک زیر 2 سال 990.000 تومان می باشد.</span>
            </p>
          </div>
        </Tab>
        <Tab eventKey="tourRes" title="مسئولین تور">
          <p className="ps-3">
            <span>
              <IoMdCheckboxOutline fontSize="18px" />
            </span>
            <span className="ps-2">{tourData.tour_guide}</span>
          </p>
        </Tab>
      </Tabs>
    </Card>
  );
}

export default NavTabsInfo;

