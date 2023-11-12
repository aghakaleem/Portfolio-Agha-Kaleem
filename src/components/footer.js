import { MailChimpForm} from "./MailChimpForm";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import logo from '../assets/img/logo.png';
import x from '../assets/img/x.png';
import github from '../assets/img/github.png';
import linkedin from '../assets/img/linkedin.png';

export default function Footer() {
    return (

        <footer className={"footer"}>
            <Container>
                <Row className={"align-items-center"}>
                    <MailChimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className={"text-center text-sm-end"}>
                        <div className={"social-icon"}>
                            <a href={""}><img src={github} alt="Github"/></a>
                            <a href={""}><img src={linkedin} alt="Linkedin"/></a>
                            <a href={""}> <img src={x} alt="X"/></a>
                        </div>
                        <p>Copyright {new Date().getFullYear()}. All Rights Reserved </p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}