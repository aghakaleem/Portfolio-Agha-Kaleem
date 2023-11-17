
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


                    <Col sm={12} md={12} lg={12} className={"text-center "}>
                        <p>All rights are reserved by @BakeryStore </p>
                    </Col>
                </Row>
            </Container>

        </footer>
    );
}