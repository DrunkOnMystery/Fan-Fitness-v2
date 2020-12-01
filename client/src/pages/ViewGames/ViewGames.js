import React from "react";
import "./style.css"
import { Container } from "../../components/Grid";



function ViewGames() {
    return (
        <div id="viewGamesContainer">
            <Container>
                <div className="row">
                    <div className="col">
                        1 of 2
                    </div>
                    <div className="col">
                        2 of 2
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default ViewGames;