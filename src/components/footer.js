import React from "react";
import { Container } from "react-bootstrap"

const footer = () => {

    // const date = new Date();
    // const year = date.getFullYear();

    return (
        <footer id="footer">
            <Container className="footerContainer">
                All rights reserved <i class="fa fa-copyright"></i> Raghav Ghai 2021 v1.1.
            </Container>
        </footer>
    );
}

export default footer;