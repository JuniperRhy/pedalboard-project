import React from "react";
import Pedal from "./Pedal";
import "./Pedals.css";

function MyPedals({ pedals }) {
  // function isUserPedal(id)
  return (
    <div>
      <h1 className="my-pedals-head">My Pedals </h1>
      <div className="my-pedals">
        {pedals.map((p) => {
          return (
            <Pedal
              name={p.name}
              image={p.image}
              effectsType={p.effect_type}
              stereo={p.stereo}
              ins={p.number_of_inputs}
              outs={p.number_of_outputs}
              price={p.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyPedals;
