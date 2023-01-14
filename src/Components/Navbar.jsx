import { Navbar, Container, Nav } from "react-bootstrap"
import { Link,Outlet } from "react-router-dom"
import {Link as LinkScroll} from 'react-scroll'


import './Navbar.css'
export const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand to="/" className="myname">Khubaib .in</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link className="all-links"><LinkScroll to="/" spy={true} smooth={true} offset={50} duration={500} className="all-links">Home</LinkScroll></Link></Nav.Link>
            <Nav.Link><Link className="all-links"><LinkScroll to="Aboutme" spy={true} smooth={true} offset={50} duration={500} className="all-links">About</LinkScroll></Link></Nav.Link>
            <Nav.Link><Link className="all-links"><LinkScroll to="skillsof" spy={true} smooth={true} offset={50} duration={500} className="all-links">Skills</LinkScroll></Link></Nav.Link>
            <Nav.Link><Link className="all-links"><LinkScroll to="contactme" spy={true} smooth={true} offset={50} duration={500} className="all-links">Contact</LinkScroll></Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  )
}