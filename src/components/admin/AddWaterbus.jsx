import { useState } from "react";

import addWaterbusStyle from "./admin.module.css";

export default function AddWaterbus() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [capacity, setCapacity] = useState(null);

  const handleSubmitAdd = () => {
    window.alert("Waterbus Added!");
    setName("");
    setType("");
    setCategory("");
    setCapacity("");
  };

  return (
    <div className={addWaterbusStyle.page}>
      <h1 className={addWaterbusStyle.title}>Add a Waterbus</h1>
      <form className={addWaterbusStyle.form}>
        <div className={addWaterbusStyle.innerForm}>
          <label> Name </label>
          <input
            className={addWaterbusStyle.input}
            placeholder="Enter Name of the Waterbus"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label> Type </label>
          <select
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
            className={addWaterbusStyle.input}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option hidden>Select a Category</option>
            <option value="ordinary">Ordinary</option>
            <option value="luxary">Luxary</option>
          </select>

          <label> Capacity </label>
          <select
            className={addWaterbusStyle.input}
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option hidden>Select Capacity</option>
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
            href="http://localhost:3000/admin/dashboard/view"
            className={addWaterbusStyle.buttonGhost}
            style={{ marginTop: "16px" }}
            onClick={handleSubmitAdd}
          >
            View List
          </a>

          <span
            className={addWaterbusStyle.button}
            style={{ marginTop: "16px", width: "148px" }}
            onClick={handleSubmitAdd}
          >
            Submit
          </span>
        </div>
      </form>
    </div>
  );
}
