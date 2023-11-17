import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {ProjectCard} from "./projectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import project1 from '../assets/img/p1.jpg';
import project2 from '../assets/img/p2.png';
import project3 from '../assets/img/p3.jpg';
import project4 from '../assets/img/p4.jpg';
import project5 from '../assets/img/p5.jpg';
import project6 from '../assets/img/p6.jpg';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import TrackVisibility from "react-on-screen";
import 'animate.css';
export const AllProjects = () => {


    const projects= [
        {
            title: 'Weather App',
            description: 'Implemented Weather Application using ReactNative and Expo.',
            imgUrl: project1,
        },
        {
            title: 'Voting System',
            description: 'Implemented Election Voting System using ReactNative and Expo.',
            imgUrl:project2,
        },
        {
            title: 'Sentiment Analysis System',
            description: 'Implemented Sentiment Analysis System',
            imgUrl:project3,

        },
        {
            title: 'Chatting Application',
            description: 'Implemented chatting Application',
            imgUrl: project4,

        },
        {
            title: 'Email Automation',
            description: 'Implemented Email Automation System',
            imgUrl: project5,
        },
        {
            title: 'Spam Email Classification System',
            description: 'Implemented Spam Email Classification System',
            imgUrl: project6,
        }


    ];

    return (

        <>
            <section className={"project"} id={"project"}>
                <Container>
                    <Row>
                        <Col xs={12} className={"text-center"}>
                            <TrackVisibility>
                                {({isVisible}) =>
                                    <div className={isVisible? "animate__animated animate__slideInUp" : ""}>
                            <h2>
                                Projects
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquam
                            </p>
                                    </div>}
                                    </TrackVisibility>

                            <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>

                            <Nav variant="pills" className={"nav-pills mb-5 justify-content-center align-items-center"} id={"pills-tab"}>
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard key={index}
                                                            {...project}
                                                            />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>

                                    <Tab.Pane eventKey="second">
                                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquam
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, alias aliquam
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>

                        </Col>
                    </Row>
                </Container>
                <img className={"background-img-right"} src={colorSharp2} alt={"color-sharp2"} />
            </section>
        </>
    );
}

