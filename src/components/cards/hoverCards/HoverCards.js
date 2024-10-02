import Card from 'react-bootstrap/Card';
import { MdTravelExplore, MdAccessTimeFilled } from "react-icons/md";
import { FaPlaneDeparture, FaPassport, FaEnvelope } from "react-icons/fa";
import { BiTrip } from "react-icons/bi";
import { FaMapLocationDot, FaPhoneFlip } from "react-icons/fa6";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { RiHealthBookLine } from "react-icons/ri";
function HoverCards({title, icon, desc}){

    return(
        <>
            {['Light'].map((variant) => (
                <Card
                bg={variant.toLowerCase()}
                key={variant}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                className="mb-2 card-style py-3 min-height animation"
                >
                <Card.Body className='text-center animation-text'>
                    <Card.Text >
                        {icon === 'MdTravelExplore' && <MdTravelExplore fontSize="2rem"/>}
                        {icon === 'FaPlaneDeparture' && <FaPlaneDeparture fontSize="2rem"/>}
                        {icon === 'BiTrip' && <BiTrip fontSize="2rem"/>}
                        {icon === 'FaPassport' && <FaPassport fontSize="2rem"/>}
                        {icon === 'BsFillPersonVcardFill' && <BsFillPersonVcardFill fontSize="2rem"/>}
                        {icon === 'RiHealthBookLine' && <RiHealthBookLine fontSize="2rem"/>}
                        {icon === 'FaEnvelope' && <FaEnvelope fontSize="2rem"/>}
                        {icon === 'FaMapLocationDot' && <FaMapLocationDot fontSize="2rem"/>}
                        {icon === 'FaPhoneFlip' && <FaPhoneFlip fontSize="2rem"/>}
                        {icon === 'MdAccessTimeFilled' && <MdAccessTimeFilled fontSize="2rem"/>}
                    </Card.Text>
                    <Card.Title className='fs-5 fw-bold'>{title}</Card.Title>
                    <Card.Text className='fs-6 py-2'>{desc}</Card.Text>
                </Card.Body>
                </Card>
             ))}
        </>
    )
}
export default HoverCards;