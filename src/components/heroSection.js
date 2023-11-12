import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import profilePicture from '../assets/img/pp.png';
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export default function HeroSection() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {

        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
        } , [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setDelta(500);
        }
    }

    return (
        <>

            <section className={"banner"} id={"home"}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className={"tagline"}>
                                Welcome to my Portfolio
                            </span>
                            <h1>{`Hi I'm Agha Kaleem `} <span className={"wrap"}>{text}</span></h1>
                            <p>lorem ipsum is simply dummy text of the printing and typesetting industry,</p>
                            <Button variant={"outline-light"} onClick={() => console.log('know more')}>Know More&nbsp; <ArrowRightCircle size={25}/></Button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={profilePicture} alt={"Agha Kaleem"} className={"img-fluid"} />
                        </Col>
                    </Row>
                </Container>

            </section>


        </>
    );
            
}