import { useState, useEffect } from "react";
import axios from "axios";
import ticketingStyle from "./user.module.css";

export default function TicketingGulshan() {
  const [departure, setDeparture] = useState("gulshan");
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState();
  const [person, setPerson] = useState();
  const [scheduleList, setScheduleList] = useState([]);
  const [verbiage, setVerbiage] = useState(
    "Please select criterias to see schedule."
  );
  const [error, setError] = useState("");

  const stations = ["Gulshan", "Police Plaza", "Rampura", "Badda", "FDC"];

  const handleSubmitFilter = (e) => {

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

    axios
      .get("http://localhost:8090/waterbus/getSchedule")
      .then((response) => {
        setScheduleList(response.data);
      })
      .catch((error) => {
        setError(error);
      });

      scheduleList = scheduleList.filter((schedule) => {
        const scheduleTime = new Date(schedule.time);
        return (scheduleTime > formData.time) & (schedule.departure === departure);
      });

      if(scheduleList.length === 0) setVerbiage("No schedule found! Please try again.") 
  };

  const handleSubmitBuy = () => {

  };

  return (
    <div className={ticketingStyle.page}>
      {/* filtering form */}
      <div className={ticketingStyle.section} style={{ overflow: "hidden" }}>
        <h1 className={ticketingStyle.title}> Station: Gulshan</h1>
        <form className={ticketingStyle.form} onSubmit={handleSubmitFilter}>
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
        <form onSubmit={handleSubmitBuy}>
          {scheduleList.length === 0 ? (
            <p> {verbiage} </p>
          ) : (
            <table className={ticketingStyle.table}>
              <thead>
                <tr>
                  <th className={ticketingStyle.th}>Schedule Id</th>
                  <th className={ticketingStyle.th}>Departure</th>
                  <th className={ticketingStyle.th}>Destination</th>
                  <th className={ticketingStyle.th}>Time</th>
                </tr>
              </thead>
              <tbody>
                {scheduleList?.map((schedule, index) => (
                  <tr
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={handleSubmitBuy}
                  >
                    <td className={ticketingStyle.td}>{schedule.scheduleid}</td>
                    <td className={ticketingStyle.td}>{schedule.departure}</td>
                    <td className={ticketingStyle.td}>{destination}</td>
                    <td className={ticketingStyle.td}>{schedule.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </form>
      </div>
    </div>
  );
}
