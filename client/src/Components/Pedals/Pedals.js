import React from "react";
import NewPedal from "./NewPedal";
import Pedal from "./Pedal";
import "./Pedals.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pedals({ pedals, setPedals }) {
  console.log("word", pedals);
  // const [pedals, setPedals] = useState([]);

  // useEffect(() => {
  //   async function fetchPedals() {
  //     const result = await fetch("");
  //     if (result.ok) {
  //       const data = await result.json();
  //       setPedals(data);
  //     }
  //   }
  // });

  return (
    <div className="pedals">
      <h1 className="pedals-head">Pedals</h1>
      <div className="pedal-nav-links">
        <a className="new-pedal-link" href="./newpedal">
          Make New Pedal
        </a>

        <a className="my-pedals-link" href="./mypedals">
          My Pedal Collection
        </a>
      </div>
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
  );
}

export default Pedals;
