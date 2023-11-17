
import Button from 'react-bootstrap/Button';
import profilePicture from '../assets/img/pp.png';
import {Col, Container, Row} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';

export default function HeroSection() {


    return (
        <>

            <section className={"banner"} id={"home"}>
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>

                                <div>

                            <p>Indulge in a symphony of flavors at our artisanal bakery.
                                Welcome to a world where the aroma of freshly baked
                                wonders captivates your senses. Our master bakers
                                craft each creation with passion, using only the finest
                                ingredients to ensure every bite is pure delight.

                                From flaky croissants to decadent cakes, experience
                                the epitome of taste and craftsmanship. Whether it's
                                a special occasion or a craving for the extraordinary,
                                our bakery offers a haven for your palate. Elevate
                                your moments with the magic of our oven-fresh delights.
                                Your journey to exceptional taste begins here.</p>

                                </div>

                            </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src={profilePicture} alt={"Profile"} className={"img-fluid"} />
                        </Col>
                    </Row>
                </Container>

            </section>


        </>
    );
            
}