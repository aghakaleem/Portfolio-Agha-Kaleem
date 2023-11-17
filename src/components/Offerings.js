import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import offering1 from '../assets/img/offering1.png';
import offering2 from '../assets/img/offering2.png';
import offering3 from '../assets/img/offering3.png';
import offering4 from '../assets/img/offering4.png';
import offering5 from '../assets/img/offering5.png';
import offering6 from '../assets/img/offering6.png';
import Button from "react-bootstrap/Button";

export const Offerings = () => {


    return (
      <>
          <section className={"offerings"} id={"offerings"}>
              <Container>
                  <Row>



                                  <div >
                                      <h2 className={"d-flex align-items-center justify-content-center  text-center"}>
                                          Our Offerings
                                      </h2>

                                  </div>

                          <Col xs={12} md={6} lg={4} xl={4} className={"text-center"}>
                              <div className={"offerings-item text-start"}>
                                <img src={offering1} alt={"Offering"} className={"img-fluid"} />

                                    <h2>Artisanal Bread</h2>
                                    <h2>RS: 900</h2>
                                    <Button variant={"light"}>Order Now</Button>

                              </div>

                          </Col>
                          <Col xs={12} md={6} lg={4} xl={4} className={"text-center"}>
                              <div className={"offerings-item text-start"}>
                                <img src={offering2} alt={"Offering"} className={"img-fluid"} />

                                    <h2>Artisanal Bread</h2>
                                    <h2>RS: 900</h2>
                                    <Button variant={"light"}>Order Now</Button>

                              </div>

                          </Col>
                          <Col xs={12} md={6} lg={4} xl={4} className={"text-center"}>
                              <div className={"offerings-item text-start"}>
                                <img src={offering3} alt={"Offering"} className={"img-fluid"} />

                                    <h2>Artisanal Bread</h2>
                                    <h2>RS: 900</h2>
                                    <Button variant={"light"}>Order Now</Button>

                              </div>

                          </Col>
                          <Col xs={12} md={6} lg={4} xl={4} className={"text-center"}>
                              <div className={"offerings-item text-start"}>
                                <img src={offering4} alt={"Offering"} className={"img-fluid"} />

                                    <h2>Artisanal Bread</h2>
                                    <h2>RS: 900</h2>
                                    <Button variant={"light"}>Order Now</Button>

                              </div>

                          </Col>
                          <Col xs={12} md={6} lg={4} xl={4} className={"text-center"}>
                              <div className={"offerings-item text-start"}>
                                <img src={offering5} alt={"Offering"} className={"img-fluid"} />

                                    <h2>Artisanal Bread</h2>
                                    <h2>RS: 900</h2>
                                    <Button variant={"light"}>Order Now</Button>

                              </div>

                          </Col>
                          <Col xs={12} md={6} lg={4} xl={4} className={"text-center"}>
                              <div className={"offerings-item text-start"}>
                                <img src={offering6} alt={"Offering"} className={"img-fluid"} />

                                    <h2>Artisanal Bread</h2>
                                    <h2>RS: 900</h2>
                                    <Button variant={"light"}>Order Now</Button>

                              </div>

                          </Col>


                    </Row>
                </Container>
          </section>
      </>
                  );
}