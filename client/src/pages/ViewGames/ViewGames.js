import React, { useEffect, useState } from "react";
import "./style.css"
import { Container } from "../../components/Grid";
import API from "../../utils/API"
import { Input, FormBtn } from "../../components/Form";
import DeleteBtn from "../../components/DeleteBtn";


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
    };

    // const removeGame = id => {
    //     dispatch({
    //       type: REMOVE_GAME,
    //       _id: id
    //     });
    //   };

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
                    <div className="shade jumbotron">
                        <div id="vgTitle">
                            <h2>Select The Games For Your Workouts</h2>
                        </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col">
                        <div className="shade jumbotron">
                            <h5>Search Team Stats By Date</h5>
                            <form>
                                        <Input
                                            onChange={handleInputChange}
                                            date="Search Date"
                                            placeholder="XXXX-MON-XX (required)"
                                        />
                                        <FormBtn
                                            disabled={!(formObject.gamedate)}
                                            onClick={handleFormSubmit}>
                                            Search Date
                                        </FormBtn>
                                    </form>
                            <br />
                            <p>Clickable links for the stats from that day's games will display in this column</p>
                            <p>The goal is to make each team's name a clickable link, which when clicked, would cause the stats for that team to appear on the opposite column.</p>
                        </div>
                    </div>
                    <div className="col">
                    <div id="right-column" className="shade jumbotron">
                                    <h5>Workout Display For The Game You've Chosen</h5>

                                    {games.length ? (
                                            <ul>
                                                {games.map(game => {
                                                    return(
                                                        <li key={game.gamedate}>
                                                                <strong>{game.teamname} {game.runs}-{game.OppRuns}
                                                                </strong>
                                                                {/* <DeleteBtn onClick={() => removeGame(post._id)} /> */}
                                                        </li>

                                                    )
                                                })}
                                                <br/>
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