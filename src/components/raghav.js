import React from "react";
import { Container,Button } from "react-bootstrap";

const Raghav = () => {
    return (
        <div id="Raghav">
            <Container className="cardItem">
                <div className="aboutRaghav">
                    <h1>Hii, <br/> I'm Raghav, <br/> Web Developer.</h1>
                    <p>MERN Stack Developer</p>
                    <Button href="#contact" size="lg" variant="outline-dark">Contact Me</Button>
                </div>
                <div className="aboutRaghav">
                    <img id="raghavImg" src="/images/raghavImage.JPG"
                        alt="Raghav_img" />
                </div>
            </Container>
        </div>
    );
}

export default Raghav;