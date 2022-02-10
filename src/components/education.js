import React from "react";
import { Container, Card, Row, Col, ProgressBar } from "react-bootstrap";

const Education = () => {
    return (
        <div id="resume">
            <Container className="cardItem">
                {/* <Row> */}
                    {/* <Col> */}
                        <Card className="mainCard">
                            <Card.Body>
                                <Card.Title className="cardTitle">Education</Card.Title>
                                <Card.Text>
                                    <p className="cardYear">2019-2023</p>
                                    <h5>Electronics and computer Engineering</h5>
                                    <p>Thapar University (Patiala)</p>
                                    <span>CGPA: 8.51</span>
                                    {/* <hr /> */}
                                    <p className="cardYear">2017-2019</p>
                                    <h5>Senior Secendory</h5>
                                    <p>Bhartiya Vidya Mandir (Ludhiana)</p>
                                    <span>Percentage: 92%</span>
                                    {/* <hr /> */}
                                    <p className="cardYear">2012-2017</p>
                                    <h5>High School</h5>
                                    <p>Bhartiya Vidya Mandir (Ludhiana)</p>
                                    <span>Percentage: 86.9%</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    {/* </Col> */}
                    {/* <Col> */}
                        <Card className="mainCard" >
                            <Card.Body>
                                <Card.Title className="cardTitle">Skills</Card.Title>
                                <Card.Text>
                                    <div className="Progress">
                                        <h5>C++</h5>
                                        <ProgressBar variant="secondary" now={90} />
                                    </div>
                                    <div className="Progress">
                                        <h5>HTML</h5>
                                        <ProgressBar variant="secondary" now={80} />
                                    </div>
                                    <div className="Progress">
                                        <h5>CSS</h5>
                                        <ProgressBar variant="secondary" now={80} />
                                    </div>
                                    <div className="Progress">
                                        <h5>javaScript</h5>
                                        <ProgressBar variant="secondary" now={75} />
                                    </div>
                                    <div className="Progress">
                                        <h5>Node.js</h5>
                                        <ProgressBar variant="secondary" now={65} />
                                    </div>
                                    <div className="Progress">
                                        <h5>MongoDB</h5>
                                        <ProgressBar variant="secondary" now={65} />
                                    </div>
                                    <div className="Progress">
                                        <h5>React</h5>
                                        <ProgressBar variant="secondary" now={60} />
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    {/* </Col> */}
                {/* </Row> */}
            </Container>
        </div>
    );
}

export default Education;