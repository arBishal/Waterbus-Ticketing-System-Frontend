import { useState, useEffect } from "react";
import axios from "axios";
import { jsPDF } from 'jspdf';

import ticketingStyle from "./user.module.css";
import Modal from "./Modal";

export default function TicketingRampura() {
  const [departure, setDeparture] = useState("Rampura");
  const [destination, setDestination] = useState("");
  const [person, setPerson] = useState();
  const [scheduleList, setScheduleList] = useState([]);
  const [filteredSchedule, setFilteredSchedule] = useState([]);
  const [ticket, setTicket] = useState({
    departure: "",
    destination: "",
    time: "",
    tripid: "",
    waaterbusid: ""
  });
  const [verbiage, setVerbiage] = useState(
    "Please select criterias to see schedule."
  );
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState();
  const [issue, setIssue] = useState({
    category: "",
    date: "",
    departure: "",
    destination: "",
    seat_count: "",
    ticket_fare: "",
    time: "",
    type: "",
    wbid: "",
    wbname: ""
  });

  const stations = ["Gulshan", "Police Plaza", "Rampura", "Badda", "FDC"];

  useEffect(() => {
    axios.get('http://localhost:8090/waterbus/getSchedule')
      .then(response => {
        setScheduleList(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleSubmitFilter = (e) => {
    e.preventDefault();

    const formData = {};
    const formElements = e.target.elements;

    // Iterate over form elements and construct the formData object
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.name) {
        formData[element.name] = element.value;
      }
    }

    const direction = stations.indexOf(destination) - stations.indexOf(departure);

    setFilteredSchedule(scheduleList.filter((schedule) => {
      const now = new Date();

      // Extract the hours and minutes
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Format hours and minutes as a 24-hour format string (HH:mm)
      const currTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1;
      let dd = today.getDate();

      if (dd < 10) dd = '0' + dd;
      if (mm < 10) mm = '0' + mm;

      const currDate = dd + '-' + mm + '-' + yyyy;


      if (direction > 0)
        return (schedule.date === currDate) & (schedule.time > currTime) & (schedule.departure === departure) & schedule.dir === "UP";
      else
        return (schedule.date === currDate) & (schedule.time > currTime) & (schedule.departure === departure) & schedule.dir === "DOWN";

    }));

    console.log("filteredscherdule", filteredSchedule);

    if (filteredSchedule.length === 0) setVerbiage("No schedule found! Please try again.")

    console.log("verbiage", verbiage);
  };

  const handleSubmitBuy = async (e) => {
    const tr = e.target.parentElement;
    const tds = Array.from(tr.getElementsByTagName("td"));

    console.log("tds5", tds[5].textContent);

    setTicket({
      departure: tds[1].textContent,
      destination: tds[2].textContent,
      time: tds[3].textContent,
      tripid: tds[4].textContent,
      waaterbusid: tds[5].textContent
    });

    try {
      const result = await axios.get(`http://localhost:8090/waterbus/${tds[5].textContent}`);
      setResponse(result.data);
    } catch (err) {
      setError(err.message);
    }

    setTimeout(issueTicket(ticket, response), 1000);

    setShowModal(true);
  };

  const print = () => {
    const doc = new jsPDF();
    doc.text(`Waterbus Ticketing System`, 10, 10);
    doc.text(`Waterbus Id: ${response.id}`, 10, 30);
    doc.text(`Waterbus Name: ${response.name}`, 10, 40);
    doc.text(`Category: ${response.category}`, 10, 50);
    doc.text(`Type: ${response.type}`, 10, 60);
    doc.text(`Departure: ${ticket.departure}`, 10, 70);
    doc.text(`Destination: ${ticket.destination}`, 10, 80);
    doc.text(`Time: ${ticket.time}`, 10, 90);
    doc.save('document.pdf');
  }

  const issueTicket = (ticket, response) => {
    setIssue({
      category: response.category,
      date: "",
      departure: ticket.departure,
      destination: ticket.destination,
      seat_count: person,
      ticket_fare: response.basefare,
      time: ticket.time,
      type: response.type,
      wbid: response.id,
      wbname: response.name
    });

    fetch("http://localhost:8090/ticket/issue", {
      method: "POST",
      mode: 'cors',
      cache: 'no-cache',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issue)
    }).then(response => {
      if (response.ok) {
        console.log("response ok", issue);
      } else {
        console.error("Failed!", response.statusText);
      }
    }).catch(error => {
      console.error("Error:", error);
    });
  };

  return (
    <>
      <div className={ticketingStyle.page}>
        {/* filtering form */}
        <div className={ticketingStyle.section} style={{ overflow: "hidden" }}>
          <h1 className={ticketingStyle.title}> Station: Rampura</h1>
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
                <option value={departure}>Rampura</option>
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

              <label> Number of Passengers </label>
              <select
                name="person"
                className={ticketingStyle.input}
                value={person}
                onChange={(e) => setPerson(e.target.value)}
                required
              >
                <option selected hidden value="">
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
            {filteredSchedule.length === 0 ? (
              <p> {verbiage} </p>
            ) : (
              <table className={ticketingStyle.table}>
                <thead>
                  <tr>
                    <th className={ticketingStyle.th}>Schedule Id</th>
                    <th className={ticketingStyle.th}>Departure</th>
                    <th className={ticketingStyle.th}>Destination</th>
                    <th className={ticketingStyle.th}>Time</th>
                    <th className={ticketingStyle.th}>Trip Id</th>
                    <th className={ticketingStyle.th}>Waterbus Id</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule?.map((schedule, index) => (
                    <tr
                      key={index}
                      style={{ cursor: "pointer" }}
                      onClick={handleSubmitBuy}
                    >
                      <td className={ticketingStyle.td}>{schedule.scheduleid}</td>
                      <td className={ticketingStyle.td}>{schedule.departure}</td>
                      <td className={ticketingStyle.td}>{destination}</td>
                      <td className={ticketingStyle.td}>{schedule.time}</td>
                      <td className={ticketingStyle.td}>{schedule.tripid}</td>
                      <td className={ticketingStyle.td}>{schedule.waterbusid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </form>
        </div>
      </div>

      {
        showModal &&
        (
          <Modal onClose={() => setShowModal(false)}>

            <div>
              <h3>This ticket will cost: {response.basefare} BDT</h3>
              <p>Waterbus Id: {response.id}</p>
              <p>Waterbus Name: {response.name}</p>
              <p>Category: {response.category}</p>
              <p>Type: {response.type}</p>
              <p>Departure: {ticket.departure}</p>
              <p>Destination: {ticket.destination}</p>
              <p>Time: {ticket.time}</p>

              <i>The Ticket has been issued. Click on the button to Print.</i>

            </div>
            <span className={ticketingStyle.button} onClick={print} style={{ marginBottom: "8px" }}> Print</span>

          </Modal>
        )
      }
    </>
  );
}
