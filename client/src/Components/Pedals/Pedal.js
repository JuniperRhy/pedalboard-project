import React from "react";
import "./Pedals.css";

function Pedal({ name, image, effectsType, stereo, ins, outs, price }) {
  return (
    <div className="pedal">
      <h2 className="pedal-name">{name}</h2>
      <br />
      <div>
        <img src={image} alt="Pedal" className="pedal-img"></img>
      </div>
      <br />
      <div>Effect Type: {effectsType}</div>
      <br />
      <div>Stereo?:{stereo}</div>
      <br />
      <div>Number of Inputs: {ins}</div>
      <br />
      <div>Number of Outputs: {outs}</div>
      <br />
      <div>Price: ${price}</div>
      <br />
      <input
        className="add-pedal"
        type="button"
        value="Add To Collection"
        onClick=""
      ></input>
      <br />
    </div>
  );
}

export default Pedal;
