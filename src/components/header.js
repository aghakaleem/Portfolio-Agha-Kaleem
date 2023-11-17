import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useEffect, useState} from 'react';

import {Link} from "react-router-dom";
import logo from "../assets/img/logo.png";
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
                    <Navbar.Brand className={"text-black"} href="#home"><img src={logo} alt={"logo"}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><Link to={"/"} style={{textDecoration:'none'}}>Home</Link></Nav.Link>
                            <Nav.Link href="" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><Link to={"/offerings"} style={{textDecoration:'none'}}>Menu</Link></Nav.Link>
                            <Nav.Link href="" className={activeLink === 'reviews' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}><Link to={"/about"} style={{textDecoration:'none'}}>About us</Link></Nav.Link>
                            <Nav.Link href="" className={activeLink === 'reviews' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}><Link to={"/reviews"} style={{textDecoration:'none'}}>Contact</Link></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            </>
    );
}