import React from "react";
import "./style.css";

function Nav() {

    return (
<ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link" href="/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/user">User Page</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/games">View Games</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/workoutbuilder">Workout Builder</a>
  </li>
</ul>
    )
}

export default Nav;