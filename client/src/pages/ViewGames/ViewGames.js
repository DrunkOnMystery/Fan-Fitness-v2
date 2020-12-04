import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from "../../components/Grid";
import API from "../../utils/API"
import { Input, FormBtn } from "../../components/Form";



function ViewGames() {


    //set state constants
    const [games, setGames] = useState([])
    const [formObject, setFormObject] = useState({})

//set use effect
    useEffect(() => {
        loadGames()
    }, [])

    //load games from the games database
    function loadGames() {
        API.getGames()
            .then(res =>
                setGames(res.data)
            )
            .catch(err => console.log(err));
        console.log(games);
    }

    function handleInputChange(event) {
        const { teamname, value } = event.target;
        setFormObject({ ...formObject, [teamname]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.date) {
            API.saveGame({
                gamedate: formObject.date,
                teamname: formObject.name,
                runs: formObject.runs,
                homeruns: formObject.homeruns,
                OppStrikeouts: formObject.OppStrikeouts,
                OppRuns: formObject.OppRuns,
                OppHomeRuns: formObject.OppHomeRuns,
                strikeouts: formObject.strikeouts
            })
                .then(() => setFormObject({
                    gamedate: "",
                    teamname: "",
                    runs: "",
                    homeruns: "",
                    OppStrikeouts: "",
                    OppRuns: "",
                    OppHomeRuns: "",
                    strikeouts: "",
                }))
                .then(() => loadGames())
                .catch(err => console.log(err))
        }
    };



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

                                    {games.length ? (
                                            <ul className="vertical menu gamesDisplay">
                                                {games.map(game => {
                                                    return(
                                                        <li key={game.gamedate}>
                                                            <a href={"/games/ + game._teamname"}>
                                                                <strong>{game.teamname} {game.runs}-{game.OppRuns}
                                                                </strong>
                                                            </a>
                                                        </li>

                                                    )
                                                })}
                                            </ul>
                                            ) : (
                                                <h5>No Results To Display</h5>
                                            )}

                                </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ViewGames;