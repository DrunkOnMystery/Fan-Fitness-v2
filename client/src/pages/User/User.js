import React from "react";
import "./style.css"
import { Container } from "../../components/Grid";



function User() {
    return (
        <div id="userContainer">
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h2>Welcome, ::username::!</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                            <h5>Your Previous Workouts</h5>
                            <p>Clickable links for your previous workouts</p>
                    </div>
                    <div className="col-lg-6">
                            <h5>Your Previous Workouts</h5>
                            <p>Clickable links for your previous workouts</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default User;