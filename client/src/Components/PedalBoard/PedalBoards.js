import React, { Component } from "react";
import PedalBoard from "./PedalBoard.js";
import "./Pedalboard.css";
function PedalBoards({ pedalboards, addNewPedalboard }) {
  console.log("test", pedalboards);
  return (
    <div>
      <h1 className="pedalboard-head">Pedalboards</h1>
      <div className="pedalboard-body">
        <a className="new-pedalboard-link" href="./newpedalboard">
          Make New PedalBoard
        </a>
        <br />
        <br />
      </div>
      {pedalboards.map((pb) => {
        return (
          <PedalBoard
            addNewPedalboard={addNewPedalboard}
            id={pb.id}
            name={pb.name}
            stereo={pb.stereo}
            pedals={pb.pedals}
            pedalboards={pedalboards}
            className="pedalboards"
          />
        );
      })}
    </div>
  );
}

export default PedalBoards;
