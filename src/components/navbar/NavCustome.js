import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { TbCircleLetterRFilled } from "react-icons/tb";
import { IoPersonOutline } from "react-icons/io5";
import Submenu from './submenu/Submenu';
import { NavLink } from 'react-router-dom';
import { useEffect,useState } from 'react';
import {getCookie} from '../../utils';



function NavCustome() {
  const [active,setActive]=useState()
  useEffect(()=>{
    setActive(getCookie("active")==true)
  },[])
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
                    </NavLink></> : <></>
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















