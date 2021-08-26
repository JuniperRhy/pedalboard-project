// import { useParams } from "react-router-dom";
import React, { useState } from "react";
import "./Pedalboard.css";

function NewPedalBoard({ addNewPedalboard, pedals }) {
  const [name, setName] = useState("");
  const [isStereo, setIsStereo] = useState(false);
  // const [pedalOrder, setPedalOrder] = useState([]);
  const [addedPedals, setAddedPedals] = useState([]);
  const [selectedPedalId, setSelectedPedalId] = useState();
  console.log("What what?", addedPedals);

  function handleAddClick() {
    if (selectedPedalId === 0) return;
    setAddedPedals([
      ...addedPedals,
      pedals.find((pedal) => pedal.id === selectedPedalId),
    ]);

    console.log("B Test 2", typeof selectedPedalId);
  }

  // const [pedalOrder, setPedalOrder] = useState([])

  // const paramsPort = useParams();
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/pedalboards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        stereo: isStereo,
        pedal_order: "",
        user_id: 2,
        pedal_ids: addedPedals.map((pedal) => {
          return pedal.id;
        }),
      }),
    })
      .then((res) => res.json())
      .then((NewPedalboard) => addNewPedalboard(NewPedalboard));
    window.location.href = "/pedalboards";
  }
  return (
    <div className="new-pedal-board">
      <h1 className="new-pedalboard-head">New Pedalboard</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Board Name
          <input
            type="text"
            name="boardName"
            placeholder="Board Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </label>
        <br />
        <label>
          Stereo?
          <select>
            <option
              value="false"
              onChange={(e) => {
                setIsStereo(e.target.value);
              }}
            >
              No
            </option>
            <option
              value="true"
              onChange={(e) => {
                setIsStereo(e.target.value);
              }}
            >
              Yes
            </option>
          </select>
        </label>
        <br />
        <select
          name="pedal"
          value={selectedPedalId}
          onChange={(e) => {
            console.log(typeof e.target.value);
            setSelectedPedalId(Number(e.target.value));
          }}
        >
          <option>-Select Pedal-</option>
          {pedals.map((pedal) => {
            return <option value={pedal.id}>{pedal.name}</option>;
          })}
        </select>
        <input
          type="button"
          value="Add Pedal?"
          onClick={handleAddClick}
        ></input>
        <h2>Signal </h2>
        <h2>←Output←←←Input←</h2>
        <div className="new-pedalboard-body">
          <div className="signal-flow-arrow">⇇</div>
          {addedPedals.map((pedal, i) => (
            <Pedal
              // handleRemoveClick={handleRemoveClick}
              setAddedPedals={setAddedPedals}
              addedPedals={addedPedals}
              pedal={pedal}
              key={i}
              pedalIndex={i}
            />
          ))}
          <div className="signal-flow-arrow">⇇</div>
        </div>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

function Pedal({ pedal, addedPedals, setAddedPedals, pedalIndex }) {
  function handleRemoveClick() {
    console.log(pedalIndex);
    const list = [...addedPedals];
    list.splice(pedalIndex, 1);
    setAddedPedals(list);
  }
  return (
    <div className="new-pedalboard-card">
      <div>
        <img
          className="new-pedalboard-pedal-img"
          alt={pedal.name}
          src={pedal.image}
        ></img>
      </div>

      <div className="new-pedalboard-card-name">{pedal.name}</div>
      <input
        type="button"
        value="Remove Pedal"
        onClick={() => handleRemoveClick()}
      ></input>
    </div>
  );
}

export default NewPedalBoard;
