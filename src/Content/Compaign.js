import React from "react";

const Compaign = (props) => {
  return (
    <div className="container">
      <div className="containerDiv">
        <h2>{props.name}</h2>
        <button
          className={
            props.status == "Sending"
              ? "sending"
              : props.status == "Sent"
              ? "sent"
              : props.status == "Draft"
              ? "draft"
              : props.status == "Error"
              ? "error"
              : props.status == "Stopped"
              ? "stopped"
              : props.status == "Evaluate"
              ? "evaluate"
              : ""
          }
        >
          {props.status}
        </button>
      </div>
      <p>Oct 17, 2018 - 14:32,sent by you</p>
    </div>
  );
};

export default Compaign;
