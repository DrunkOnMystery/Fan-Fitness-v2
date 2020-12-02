import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";



function WorkoutBuilder() {
    return (
        <div id="workoutBuilderContainer">
            <Container>
                <div className="row">
                    <div className="col">
                        <h2 id="workoutPageTitle">Workout Builder
                        </h2>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col">
                        <p>Placeholder</p>
                    </div>
                    <div className="col">
                        <p>Placeholder</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WorkoutBuilder;