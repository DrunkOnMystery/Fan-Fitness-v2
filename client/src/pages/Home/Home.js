import React from "react";
import "./style.css"
// import Dropdown from "react-bootstrap/Dropdown";
import { Container, Row, Col } from "../../components/Grid";


function Home() {
    return (
        <div id="homeContainer">
            <Container>
                <Row>
                    <Col>
                        <div className="jumbotron" id="homeJumbotron">
                            <h1 className="bolder">Welcome to Fan Fitness</h1>
                            <h6 className="bolder lead">The world's first baseball-results themed workout app.</h6>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-left jumbotron">
                            <p className="bolder">The goal of this fitness program is to tie supporting your team with getting in shape.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-right jumbotron">
                            <p className="bolder">The way it works is:
                            You search for a game by the date it was played.
                            You click on your team.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-left jumbotron">
                            <p className="bolder">From there, the stats of your team and their opponent will be shown to you, along with multipliers for a workout.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-right jumbotron">
                            <p className="bolder">When your team plays well, you'll work out less. When their opponents play well, you'll work out more.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-left jumbotron">
                            <p className="bolder">You can create your own workouts, or add new exercises for your workouts to our database.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="jumbotron-right jumbotron">
                            <p class="bolder">So get ready to get in shape and cheer on your team!</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;