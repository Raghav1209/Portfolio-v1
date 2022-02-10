import React from "react";
import { Container } from "react-bootstrap"

const footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer id="footer">
            <Container className="footerContainer">
                All rights reserved <i class="fa fa-copyright"></i> {year} Raghav Ghai
            </Container>
        </footer>
    );
}

export default footer;