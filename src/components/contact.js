import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from "react";
import {Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import contactImg from '../assets/img/contact-img.svg';
import button from "bootstrap/js/src/button";

import MailchimpSubscribe from "react-mailchimp-subscribe"

export default function Contact (){

    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({...formDetails, [category]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        let result = await response.json();
        setButtonText('Send');
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({success: true, message: 'Message Sent Successfully'});
        } else{
            setStatus({success: false, message: 'Message Failed to Send' });
        }
    };
    return(
        <>

            <section className={"contact"} id={"contact"}>
                <Container>
                    <Row className={"align-items-center"}>
                        <Col md={6} lg={4}>
                            <img src={contactImg} alt="Contact Us"/>
                        </Col>

                        <Col md={6}>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={6} className={"px-1"}>
                                        <input type="text" placeholder={"First Name"} value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}/>


                                    </Col>
                                    <Col sm={6} className={"px-1"}>
                                        <input type="text" placeholder={"Last Name"} value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                    </Col>

                                    <Col sm={12} md={12} lg={12} xl={12} className={"px-1"}>
                                        <input type="email" placeholder={"Email"} value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                    </Col>

                                    <Col sm={12} md={12} lg={12} xl={12} className={"px-1"}>
                                        <textarea  placeholder={"Your Message"} rows={6} value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}> </textarea>
                                        <Button  variant={"outline-dark"} type={"submit"}><span>{buttonText}</span></Button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.success === false ? "Danger" : "Success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}