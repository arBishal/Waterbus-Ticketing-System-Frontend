import { useEffect, useState } from "react";
import axios from "axios";

import addWaterbusStyle from "./admin.module.css";

export default function AddWaterbus() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState();
  const [baseFare, setBaseFare] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8090/api/basefare')
      .then(response => {
        setBaseFare(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleSubmitAdd = (e) => {
    e.preventDefault();

    const formData = {};
    const formElements = e.target.elements;

    console.log(formElements);

    // Iterate over form elements and construct the formData object
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    let waterbus = {
      ...formData,
      basefare: 0
    };

    console.log("formData", waterbus);

    if (formData.type === "ac" & formData.category === "luxury") {
      waterbus.basefare = baseFare.fareac + baseFare.farelux;
    }

    else if (formData.type === "ac" & formData.category === "ordinary") {
      waterbus.basefare = baseFare.fareac + baseFare.fareord;
    }

    else if (formData.type === "nonac" & formData.category === "luxury") {
      waterbus.basefare = baseFare.farenonac + baseFare.farelux;
    }

    else if (formData.type === "nonac" & formData.category === "ordinary") {
      waterbus.basefare = baseFare.farenonac + baseFare.fareord;
    }

    console.log("waterbus", waterbus);

    fetch("http://localhost:8090/waterbus/regi", {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(waterbus)
    }).then(response => {
      if (response.ok) {
        console.log("response ok", waterbus);
        window.alert("Waterbus Added!");
        resetForm();
      } else {
        console.error("Failed to add waterbus", response.statusText);
      }
    }).catch(error => {
      console.error("Error:", error);
    });
  };

  const resetForm = () => {
    setName("");
    setType("");
    setCategory("");
    setCapacity("");
  }


  return (
    <div className={addWaterbusStyle.page}>
      <h1 className={addWaterbusStyle.title}>Add a Waterbus</h1>
      <form className={addWaterbusStyle.form} onSubmit={handleSubmitAdd}>
        <div className={addWaterbusStyle.innerForm}>
          <label> Name </label>
          <input
            name="name"
            className={addWaterbusStyle.input}
            placeholder="Enter Name of the Waterbus"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label> Type </label>
          <select
            name="type"
            className={addWaterbusStyle.input}
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option hidden>Select a Type</option>
            <option value="ac">AC</option>
            <option value="nonac">Non-AC</option>
          </select>

          <label> Category </label>
          <select
            name="category"
            className={addWaterbusStyle.input}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden value="">Select a Category</option>
            <option value="ordinary">Ordinary</option>
            <option value="luxury">Luxary</option>
          </select>

          <label> Capacity </label>
          <select
            name="capacity"
            className={addWaterbusStyle.input}
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option hidden value="">Select Capacity</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
        <div className={addWaterbusStyle.buttonCluster}>
          <a
            href="http://localhost:3000/admin/dashboard"
            className={addWaterbusStyle.buttonGhost}
            style={{ marginTop: "16px" }}
          >
            Back
          </a>

          <a
            href="http://localhost:3000/admin/dashboard/view-waterbus"
            className={addWaterbusStyle.buttonGhost}
            style={{ marginTop: "16px" }}
          >
            View Vessel List
          </a>

          <button
            className={addWaterbusStyle.button}
            style={{ marginTop: "16px", width: "148px" }}

          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
