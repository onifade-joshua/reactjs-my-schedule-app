import { useState } from "react";
function Schedule(props) {
  function deleteHandler() {
    // console.log("Clicked!");
    // console.log(props.text);
    
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    </div>
  )
}

export default Schedule;