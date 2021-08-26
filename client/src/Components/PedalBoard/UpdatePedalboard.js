import React, { useState } from "react";
import "./Pedalboard.css";

function UpdatePedalboard({ addNewPedalboard, pedals }) {
  const [name, setName] = useState("");
  const [isStereo, setIsStereo] = useState(false);
  const [pedalOrder, setPedalOrder] = useState([]);
  const [inputList, setInputList] = useState([{ pedalArr: pedalList() }]);

  function pedalList() {
    pedals.map((p) => {
      console.log("mypedals", p.name);
      return <option value="{p.name}">{p.name}</option>;
    });
  }

  function handleAddClick() {
    setInputList([...inputList, { pedalArr: pedalList(pedals) }]);
  }
  function handleRemoveClick(index) {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  }

  function handleChange(e, index) {
    const { name, value } = e.target;

    const list = [...inputList];
    list[index][name] = value;

    setInputList({
      list,
    });
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
        pedal_order: pedalOrder,
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
        {inputList.map((x, i) => {
          return (
            <div key={i}>
              <label>
                Add Pedal
                <select
                  name="pedal"
                  value={x.pedalArr}
                  onchange={(e) => {
                    setPedalOrder(e.target.value);
                  }}
                >
                  {x.pedalArr}
                </select>
              </label>
              <input
                type="button"
                value="Remove Pedal"
                onClick={handleRemoveClick}
              ></input>
              <input
                type="button"
                value="Add Pedal?"
                onClick={handleAddClick}
              ></input>
            </div>
          );
        })}
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default UpdatePedalboard;
