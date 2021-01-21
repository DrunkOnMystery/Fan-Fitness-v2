import React, { useEffect, useState, Component } from "react";
import "./style.css"
import { Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import API from "../../utils/API";
// import ExerciseDropdown from "../../components/ExerciseDropdown/ExerciseOne";


class Dropdown extends Component {

    constructor() {
        super();

        this.state = {
            showMenu: false,
        }

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.showMenu}>
                    Choose Exercise One
                </button>


                {/* {exercises.length ? (
                                <ul className="vertical menu accordion-menu" data-accordion-menu>
                                    <li>
                                        <p>Current Exercises In The Database:</p>
                                        <ul className="menu simple">
                                            {exercises.map(exercise => {
                                                return (
                                                    <li key={exercise._name}>
                                                        <h5>
                                                            {exercise.name}
                                                            <br />
                                                        </h5>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            ) : (
                                    <h5> NOTHING TO DISPLAY</h5>
                                )}
                        </div> */}
                
                  {/* {exercises.length ? (
                            <div className="menu" ref={(element) => {
                                this.dropdownMenu = element;
                            }}>
                                <button>{exercise.name}</button>
                            </div>
                        )
                        : (
                            null
                        )
                } */}
            </div>
        );
    }
}

//function for the WorkoutBuilder page
function WorkoutBuilder() {

    //Set constants for the state effect
    const [exercises, setExercises] = useState([])
    const [formObject, setFormObject] = useState({})

    //set useEffect
    useEffect(() => {
        loadExercises();
    }, [])

    const userExercises = [];

    function loadExercises() {
        API.getExercises()
            .then(res =>
                userExercises.push(res.data));
        API.getExercises()
            .then(res =>
                setExercises(res.data)
            )
            .catch(err => console.log(err));
        console.log(userExercises);
    };

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formObject.exercise && formObject.defaultCount) {
            API.saveExercise({
                name: formObject.exercise,
                description: formObject.description,
                defaultCount: formObject.defaultCount
            })
                .then(() => setFormObject({
                    name: "",
                    description: "",
                    defaultCount: ""
                }))
                .then(res => loadExercises())
                .catch(err => console.log(err))
        }
    };

    return (
        <div id="workoutBuilderContainer">
            <Container>
                <div className="row">
                    <div className="col">
                        <div className="shade jumbotron">
                            <h1 id="workoutPageTitle">Workout Builder
                        </h1>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col">
                        <form id="inputForm">
                            <Input
                                onChange={handleInputChange}
                                name="exercise"
                                placeholder="Exercise Name (Required)"
                            />
                            <Input
                                onChange={handleInputChange}
                                name="defaultCount"
                                placeholder="Reps (Required)"
                            />
                            <TextArea

                                onChange={handleInputChange}
                                name="description"
                                placeholder="Describe the exercise (Optional)"
                            />
                            <FormBtn

                                disabled={!(formObject.exercise && formObject.defaultCount)}
                                onClick={handleFormSubmit}>
                                Submit Exercise
                            </FormBtn>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="shade jumbotron">
                            <h5>Your Workouts</h5>
                            <p>Add exercises to create your own workout here.</p>
                            {exercises.length ? (
                                <ul className="vertical menu accordion-menu" data-accordion-menu>
                                    <li>
                                        <p>Current Exercises In The Database:</p>
                                        <ul className="menu simple">
                                            {exercises.map(exercise => {
                                                return (
                                                    <li key={exercise._name}>
                                                        <h5>
                                                            {exercise.name}
                                                            <br />
                                                        </h5>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                </ul>
                            ) : (
                                    <h5> NOTHING TO DISPLAY</h5>
                                )}
                        </div>
                    </div>
                    <Dropdown />
                    {/* <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" onclick="dropdownFunction()" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                        </a>

                        <div id="dropdown" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> */}
                    <div className="col">
                        <div className="shade jumbotron">
                            <h4>Workout Requirements For The Chosen Game:</h4>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}


export default WorkoutBuilder;