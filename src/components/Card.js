import React from "react";
import { Card, Button } from "react-bootstrap";
// import Projects from "../constants";

const Cardd = (props) => {

    const [isMouseon, setBg] = React.useState(false);
    function handleMouseover() {
        setBg(true);
    }

    function handleMousedown() {
        setBg(false);
    }

    return (

        // < Row >
            // <Col>
                <Card className="mainCard">
                    <Card.Img style={{boxShadow: "0 8px 10px 0 rgba(10, 10, 10, 0.2), 0 6px 20px 0 rgba(14, 12, 12, 0.19)", borderRadius: "24px"}} 
                    variant="top" src={props.image} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.desc}
                        </Card.Text>
                        <Card.Text>
                            <ul className="tagsList">
                                {props.tag.map((tag) => {
                                    return (
                                        <li>{tag}</li>
                                    );
                                })}
                            </ul>
                        </Card.Text>
                        <a href={props.source} target="_blank" rel="noreferrer" style={{textDecoration: "none"}}><Button onMouseOver={handleMouseover} onMouseOut={handleMousedown}
                            style={{ backgroundColor: isMouseon ? "rgb(72, 74, 77)" : "rgb(33,37,41)" }} className="projectButton">
                            Source
                        </Button></a>
                    </Card.Body>
                </Card>
            // </Col>
        // </Row >
    )
}

export default Cardd;