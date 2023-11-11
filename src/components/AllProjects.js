import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const AllProjects = () => {
    return (

        <>
            <div className="projects-section pt-5 pb-5 m-0" style={{backgroundColor: '#121212'}}>

                <div className={"row d-flex align-items-center justify-content-center"}>
                    <div className="col-sm-12 col-lg-12 col-md 12 d-flex justify-content-center">
                        <h1>My Projects</h1>
                    </div>

                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/img/p1.jpg")} />
                                <Card.Body>
                                    <Card.Title>Weather Project</Card.Title>
                                    <Card.Text>
                                        Implemented Weather Application using ReactNative and Expo.
                                    </Card.Text>
                                    <Button variant="primary" href={"https://www.github.com"}>Read More</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/img/p1.jpg")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>


                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center ">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/img/p1.jpg")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/img/p1.jpg")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/img/p1.jpg")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4 d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={require("../assets/img/p1.jpg")} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>

                        <div className="col-sm-12 col-lg-12 col-md 12 d-flex justify-content-center pt-4 ">
                            <button className={"btn btn-light "}>View All Projects</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

