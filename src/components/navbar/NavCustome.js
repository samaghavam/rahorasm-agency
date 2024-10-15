import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbCircleLetterRFilled } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Submenu from './submenu/Submenu';
import {  NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {deleteCokie, getCookie} from '../../utils';
import { PiSignOutBold } from "react-icons/pi";
import axios from "axios"

function NavCustome() {
  const [active,setActive]=useState()
  useEffect(()=>{
    setActive(getCookie("active")==false)
  },[])
  const signout = async() => {
    try{
      await axios.get(
        process.env.REACT_APP_BASE_URL + '/auth/logout/',
      )
      setActive(true)
      deleteCokie("active")
    }catch(error){
      setActive(true)
      deleteCokie("active")
    }
  }
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary shadow mb-3">
          <Container>
            <NavLink to="/">
              <Navbar.Brand>
                  <span className='english-font align-bottom brand-name'>ahorasm</span>
                  <span className='align-baseline'><TbCircleLetterRFilled fontSize='2rem' /></span>
              </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  راه و رسم سفر
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 ps-4">
                  {/* render navItems and submenus from submenu.js */}
                    <Submenu />
                </Nav>
                <Nav className="justify-content-end align-items-center flex-grow-1 pe-3">
                  {active ? <>
                    <NavLink to='/login'>
                      <span className='p-2'>ورود</span>
                    </NavLink>
                    <span>|</span>
                    <NavLink to='/register'>
                      <span className='px-2'>ثبت نام</span>
                      <span><IoPersonOutline /></span>
                    </NavLink></> : <>
                      <div onClick={signout} style={{"cursor":"pointer"}}>
                        <span className="px-2"><PiSignOutBold /></span>
                        <span className="px-2">خروج از سیستم</span>
                      </div>
                    </>
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default NavCustome;















