import React from "react";

//Function for the Input area
export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

//Function for the Text area
export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" size="40" {...props} />
    </div>
  );
}

//Function for the Form Button
export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="button">
      {props.children}
    </button>
  );
}