import React from "react";
import "./style.css";

function Nav() {

  return (
    <div className="navstyle">
      <ul className="nav justify-content-end" id="nav-list">
        <h2 id="header-text">FAN FITNESS</h2>
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/user">User Page</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/games">View Games</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/workoutbuilder">Workout Builder</a>
        </li>
      </ul>
    </div>
  )
}

export default Nav;