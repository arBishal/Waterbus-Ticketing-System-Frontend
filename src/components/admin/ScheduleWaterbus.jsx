import { useState, useEffect } from "react";
import scheduleWaterbusStyle from "./admin.module.css";

export default function ScheduleWaterbus() {
  const [wId, setWId] = useState();
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState();

  const wIds = [1, 2, 3, 4, 5];
  const stations = ["Gulshan", "Police Plaza", "Rampura", "Badda", "FDC"];

  const handleSubmitSchedule = () => {};

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
            name="wid"
            className={scheduleWaterbusStyle.input}
            value={wId}
            onChange={(e) => setWId(e.target.value)}
          >
            <option hidden>Select an Id</option>
            {wIds.map((wId, index) => (
              <option key={index} value={wId}>
                {wId}
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
