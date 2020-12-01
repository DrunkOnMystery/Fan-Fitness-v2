import React from "react";
import "./style.css"

function Jumbtron() {
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">{children}</h1>
    <p class="lead">{children}</p>
  </div>
</div>
}

export default Jumbtron;