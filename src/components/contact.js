import React from "react"
import { Container } from "react-bootstrap";

const contact = (props) => {
    return (
        <div id="contact">
            <Container className="contactContainer">
                <div className="contactHeading">
                    <h1>Raghav Ghai</h1>
                    <p>Get in touch with me for any MERN related Project</p>
                </div>
                <Container className="iconContainer">
                    <div className="icons">
                        <a href={props.gmail} target="_blank" rel="noreferrer">
                            <i class="fa fa-envelope"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <a href={props.github} target="_blank" rel="noreferrer">
                            <i class="fa fa-github"></i>
                        </a>

                    </div>
                    <div className="icons">
                        <a href={props.linkedin} target="_blank" rel="noreferrer">
                            <i class="fa fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="icons">
                        <a href={props.instagram} target="_blank" rel="noreferrer">
                            <i class="fa fa-instagram"></i>
                        </a>

                    </div>
                    <div className="icons" >
                        <a href={props.facebook} target="_blank" rel="noreferrer">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default contact;