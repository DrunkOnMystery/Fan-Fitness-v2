import React from "react";
import "./style.css"
import { Container, Row, Col } from "../../components/Grid";



function User() {
    return (
        <div id="userContainer">
            <Container>
                <Row>
                    <Col className="col-md-12">
                        <div>
                        <h2>Welcome, ::username::!</h2>
                        </div>
                    </Col>
                </Row>
                <Row>    
                    <Col className="col">
                    <div id="left-UserColumn" >
                        <h5>Your Previous Workouts</h5>
                        <p>Clickable links for your previous workouts</p>
                    </div>
                    </Col>
                    <Col className="col">
                    <div id="right-UserColumn">
                        <h5>Your Previous Workouts</h5>
                        <p>Clickable links for your previous workouts</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default User;