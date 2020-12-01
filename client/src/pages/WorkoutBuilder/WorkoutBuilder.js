import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
// import API from "../../utils/API";



function WorkoutBuilder() {
    return (
        <div id="workoutBuilderContainer">
            <Container>
               <div className="row">
                    <div className="col-12">
                        <h2 id="workoutPageTitle">Workout Builder
                        </h2>
                    </div>
                </div>
                <br /> 
                <div className="row">
                    <div classname="col-md-5">
                        <h5>Placeholder</h5>
                    </div>
                    <div className="col-md-2"></div>
                    <div classname="col-md-5">
                        <h5>Placeholder</h5>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default WorkoutBuilder;