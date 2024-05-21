import { useState, useEffect } from "react";
import axios from "axios";

import scheduleWaterbusStyle from "./admin.module.css";

export default function ScheduleWaterbus() {
  const [wId, setWId] = useState();
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState();
  const [waterbusList, setWaterbusList] = useState([]);
  const [error, setError] = useState(null);

  const stations = ["Gulshan", "Police Plaza", "Rampura", "Badda", "FDC"];

  useEffect(() => {
    axios.get('http://localhost:8090/waterbus/getList')
      .then(response => {
        setWaterbusList(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleSubmitSchedule = (e) => {
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


    fetch("http://localhost:8090/waterbus/schedule", {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    }).then(response => {
      if (response.ok) {
        console.log("response ok", formData);
        window.alert("Schedule Added!");
        resetForm();
      } else {
        console.error("Failed to add schedule", response.statusText);
      }
    }).catch(error => {
      console.error("Error:", error);
    });
  };

  const resetForm = () => {
    setWId();
    setDeparture("");
    setDestination("");
    setTime();
  }

  return (
    <div className={scheduleWaterbusStyle.page}>
      <h1 className={scheduleWaterbusStyle.title}>Schedule a Waterbus</h1>
      <form
        className={scheduleWaterbusStyle.form}
        onSubmit={handleSubmitSchedule}
      >
        <div className={scheduleWaterbusStyle.innerForm}>
          <label> Waterbus Id </label>
          <select
            name="waterbusid"
            className={scheduleWaterbusStyle.input}
            value={wId}
            onChange={(e) => setWId(e.target.value)}
          >
            <option hidden>Select an Id</option>
            {waterbusList.map((waterbus, index) => (
              <option key={index} value={waterbus.id}>
                {waterbus.id}: {waterbus.name}
              </option>
            ))}
          </select>

          <label> Departure From </label>
          <select
            name="departure"
            className={scheduleWaterbusStyle.input}
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          >
            <option hidden value="">
              Select Departure
            </option>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>

          <label> Destination At </label>
          <select
            name="destination"
            className={scheduleWaterbusStyle.input}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option hidden value="">
              Select Destination
            </option>
            {stations.map((station, index) => (
              <option key={index} value={station}>
                {station}
              </option>
            ))}
          </select>

          <label> Choose Time </label>
          <input
            type="time"
            name="time"
            className={scheduleWaterbusStyle.input}
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <div className={scheduleWaterbusStyle.buttonCluster}>
          <a
            href="http://localhost:3000/admin/dashboard"
            className={scheduleWaterbusStyle.buttonGhost}
            style={{ marginTop: "16px" }}
          >
            Back
          </a>

          <a
            href="http://localhost:3000/admin/dashboard/view"
            className={scheduleWaterbusStyle.buttonGhost}
            style={{ marginTop: "16px" }}
          >
            View Vessel List
          </a>

          <button
            className={scheduleWaterbusStyle.button}
            style={{ marginTop: "16px", width: "148px" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
