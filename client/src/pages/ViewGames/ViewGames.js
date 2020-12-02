import React from "react";
import "./style.css"
import { Container } from "../../components/Grid";
import API from "../../utils/API"
import { Input, FormBtn } from "../../components/Form";



function ViewGames() {
    return (
        <div id="viewGamesContainer">
            <Container>
                <div className="row">
                    <div className="col">
                        <div id="vgTitle">
                            <h2>Select The Games For Your Workouts</h2>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col">
                        <div>
                            <h5>Search Team Stats By Date</h5>
                            <br />
                            <p>Clickable links for the stats from that day's games will display in this column</p>
                            <p>The goal is to make each team's name a clickable link, which when clicked, would cause the stats for that team to appear on the opposite column.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div id="right-column">
                            <h5>Workout Display For The Game You've Chosen</h5>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ViewGames;