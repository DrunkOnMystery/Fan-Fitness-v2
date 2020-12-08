import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import Nav from "./components/Nav";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import WorkoutBuilder from "./pages/WorkoutBuilder";
import ViewGames from "./pages/ViewGames";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";


//The render function, including all the various routes for the different pages.
class App extends Component {

//   componentDidMount() {
//     const apiURL = "https://api.sportsdata.io/v3/mlb/scores/json/TeamGameStatsByDate/2020-Aug-17?key=49f703424dd5440ab0bf8de43e4f7c40"
//     fetch(apiURL)
//       .then(response => response.json())
//       .then(function(data) {
//         for (let i=0; i<data.length; i++) {
//           console.log("This team is the " + data[i].Name);
//         }
    
//       .then(data => console.log("New console log " + data[0]));
//   })
// }

  render() {
    return (
      <div className="App">
        <Nav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/user" component={User}></Route>
            <Route exact path="/games" component={ViewGames}></Route>
            <Route exact path="/workoutbuilder" component={WorkoutBuilder}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
