import React from "react";
import {Container, Row, Button} from "react-bootstrap";
import DreamComponent from "../components/DreamComponent";

function Dream() {
    return (
        <Container>
            <Button>+ Add Dream</Button>
            <Row xs={1} md={3}>
                <DreamComponent></DreamComponent>
                <DreamComponent></DreamComponent>
                <DreamComponent></DreamComponent>
                <DreamComponent></DreamComponent>
            </Row>
        </Container>
    );
}

export default Dream;