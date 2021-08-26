import React from "react";
import { useEffect, useState } from "react";
import "./Pedalboard.css";

function PedalBoard({ name, pedals, stereo, id, addNewPedalboard }) {
  console.log("pedalTester", id);

  function handleDeletePedalboard() {
    fetch(`http://localhost:3000/pedalboards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((newPedal) => addNewPedalboard(newPedal));
    window.location.href = "/pedalboards";
  }

  return (
    <div className="pedalboard-card">
      <div className="pedalboard-pedal-card-header">{name}</div>
      {/* <br /> */}
      {/* <div>{stereo}</div> */}

      <h2 className="signal-flow-header">Signal Flow:</h2>
      <h2>⇇Output⇇⇇⇇Input⇇</h2>
      <div className="pedalboard">
        <div className="signal-flow-arrow">⇇</div>
        {pedals.map((pedal) => {
          return (
            <div className="pedalboard-pedal-card">
              <div className="pedalboard-pedal-card-title">{pedal.name}</div>
              <img
                className="pedalboard-pedal-card-image"
                alt={pedal.name}
                src={pedal.image}
              />
            </div>
          );
        })}
        <div className="signal-flow-arrow">⇇</div>
      </div>
      <button className="update-pedalboard" onClick="">
        Update
      </button>
      <button className="delete-pedalboard" onClick={handleDeletePedalboard}>
        Delete
      </button>
      <br />
      <br />
    </div>
  );
}

export default PedalBoard;
