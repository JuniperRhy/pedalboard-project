import React, { Component, useState } from "react";
import { Form } from "semantic-ui-react";
import "./Pedals.css";

function NewPedal({ addNewPedal }) {
  const [name, setName] = useState("");
  const [effectType, setEffectType] = useState("");
  const [isStereo, setIsStereo] = useState(false);
  const [numberOfInputs, setNumberOfInputs] = useState("");
  const [numberOfOutputs, setNumberOfOutputs] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/pedals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        effect_type: effectType,
        price: price,
        stereo: isStereo,
        number_of_inputs: numberOfInputs,
        number_of_outputs: numberOfOutputs,
        image: image,
        category: category,
      }),
    })
      .then((res) => res.json())
      .then((newPedal) => addNewPedal(newPedal));
    window.location.href = "/pedals";
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log("test", e.target.pedalName.value, e.target.stereo.value);
  //   window.location.href = "/pedalboards";
  // };

  return (
    <div className="new-pedal">
      <h1 className="new-pedal-header">NewPedal</h1>
      <Form className="new-pedal-form" onSubmit={handleSubmit}>
        <label>
          Pedal Name
          <input
            type="text"
            name="pedalName"
            placeholder="Pedal Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Effects Type
          <select
            name="effectsType"
            onChange={(e) => {
              setEffectType(e.target.value);
            }}
          >
            <option value="distortion">distortion</option>
            <option value="gain">gain</option>
            <option value="fuzz">fuzz</option>
            <option value="overdrive">overdrive</option>
            <option value="bit-reduction">bit-reduction</option>
            <option value="delay">delay</option>
            <option value="reverb">reverb</option>
            <option value="pitch">pitch</option>
            <option value="ring modulation">ring modulation</option>
            <option value="flanger">flanger</option>
            <option value="phaser">phaser</option>
            <option value="wah">wah</option>
            <option value="rotary">rotary</option>
            <option value="tremolo">tremolo</option>
            <option value="filter">tremolo</option>
            <option value="eq">eq</option>
            <option value="dynamics">dynamics</option>
            <option value="specialty">specialty</option>
            <option value="multi">multi</option>
            <option value="other">other</option>
          </select>
        </label>
        <br />
        <label>
          Stereo?
          <select
            name="stereo"
            onChange={(e) => {
              setIsStereo(e.target.value);
            }}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </label>
        <br />
        <label>
          Number of Inputs
          <input
            type="integer"
            name="numberOfInputs"
            placeholder="Number Of Inputs"
            value={numberOfInputs}
            onChange={(e) => {
              setNumberOfInputs(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Number of Outputs
          <input
            type="integer"
            name="numberOfOutputs"
            placeholder="Number Of Outputs"
            value={numberOfOutputs}
            onChange={(e) => {
              setNumberOfOutputs(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Price
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Image
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            // value={selectedFile}
            // onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </label>
        <br />
        <label>
          Effects Category
          <select
            name="effectsCategory"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="dynamics">dynamics</option>
            <option value="gain">gain</option>
            <option value="modulation">modulation</option>
            <option value="time">time</option>
            <option value="tune">tune</option>
          </select>
        </label>
        <br />
        <input
          type="submit"
          className="new-pedal-submit-button"
          value="Submit"
        ></input>
      </Form>
    </div>
  );
}

export default NewPedal;
