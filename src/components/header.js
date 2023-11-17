import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useEffect, useState} from 'react';
import x from '../assets/img/x.png';
import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';
import {Link} from "react-router-dom";
export default function Header() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setsScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY >= 50) {
                setsScrolled(true);
            } else {
                setsScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }
    return (
        <>
            <Navbar  expand="lg" data-bs-theme="dark" className={scrolled? "scrolled": ""} >
                <Container>
                    <Navbar.Brand className={"text-white"} href="#home">Agha Kaleem</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><Link to={"/"} style={{textDecoration:'none'}}>Home</Link></Nav.Link>
                            <Nav.Link href="" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><Link to={"/all-projects"} style={{textDecoration:'none'}}>Projects</Link></Nav.Link>
                            <Nav.Link href="" className={activeLink === 'reviews' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('reviews')}><Link to={"/reviews"} style={{textDecoration:'none'}}>Reviews</Link></Nav.Link>
                            {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">*/}
                            {/*    <NavDropdown.Item href="#action/3.1">Buyer Review</NavDropdown.Item>*/}
                            {/*    <NavDropdown.Item href="#action/3.2">*/}
                            {/*        Seller Review*/}
                            {/*    </NavDropdown.Item>*/}
                            {/*</NavDropdown>*/}
                        </Nav>
                        <span className={"navbar-text"}>
                                <div className="social-icon">
                                    <a href="" ><img src={github} alt="github" /></a>
                                    <a href="" ><img src={linkedin} alt="linkedin" /></a>
                                    <a href="" ><img src={x} alt="X" /></a>
                                </div>
                                <button className={"vvd"} onClick={() => {alert("hello")}}><span> Let's Connect</span></button>
                            </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </>
    );
}