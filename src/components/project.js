import React from "react";
import Projects from "../constants";
import Card from "./Card";
import { Container } from "react-bootstrap";

const Project = (props) => {
    return (
        <div id="project">
            <Container id="heading">
                <h1>My Projects</h1>
            </Container>
            <Container className="cardItem">
                {Projects.map((ProjectItem) => {
                    return (
                        <Card title={ProjectItem.title} desc={ProjectItem.description} tag={ProjectItem.tags}
                            source={ProjectItem.source}
                            image={ProjectItem.image}
                        />
                    );
                })}
            </Container>
        </div>
    );
}

export default Project;