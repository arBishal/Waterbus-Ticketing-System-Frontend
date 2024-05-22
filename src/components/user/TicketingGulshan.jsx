import { useState, useEffect } from "react";

import ticketingStyle from "./user.module.css";

export default function TicketingGulshan() {
  const [departure, setDeparture] = useState("gulshan");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState();
  const [person, setPerson] = useState();
  const [scheduleList, setScheduleList] = useState([]);

  const stations = ["Gulshan", "Police Plaza", "Rampura", "Badda", "FDC"];

  const handleSubmitFilter = () => {};

  const handleSubmitBuy = () => {};

  return (
    <div className={ticketingStyle.page}>
        {/* filtering form */}
      <div className={ticketingStyle.section} style={{overflow: "hidden"}}>
        <h1 className={ticketingStyle.title}> Station: Gulshan</h1>
        <form className={ticketingStyle.form}>
          <div className={ticketingStyle.innerForm}>
            <label> Departure From </label>
            <select
              disabled
              name="departure"
              className={ticketingStyle.input}
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
            >
              <option value={departure}>Gulshan</option>
            </select>

            <label> Destination At </label>
            <select
              name="destination"
              className={ticketingStyle.input}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              required
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

            <label> Select Type </label>
            <select
              name="type"
              className={ticketingStyle.input}
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="ac">AC</option>
              <option value="nonac">Non-AC</option>
            </select>

            <label> Choose Time </label>
            <input
              type="time"
              name="time"
              className={ticketingStyle.input}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />

            <label> Number of Passengers </label>
            <select
              name="person"
              className={ticketingStyle.input}
              value={person}
              onChange={(e) => setPerson(e.target.value)}
              required
            >
              <option selected value="">
                {" "}
                Choose number of passangers
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <button
            className={ticketingStyle.button}
            style={{ marginTop: "16px", width: "148px" }}
          >
            Find Waterbus
          </button>
        </form>
      </div>

      {/* available schedule */}
      <div className={ticketingStyle.section}>
        <h1 className={ticketingStyle.title}> Available Schedule </h1>
        <form>
            Please select criterias to search for a schedule.
        </form>
      </div>
    </div>
  );
}
