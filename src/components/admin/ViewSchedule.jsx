import { useState, useEffect } from "react";
import axios from "axios";

import viewWaterbusStyle from "./admin.module.css";

export default function AdminViewWaterbus() {

  const [scheduleList, setScheduleList] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios.get('http://localhost:8090/waterbus/getSchedule')
      .then(response => {
        setScheduleList(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

//   const FilterSchedule = () => {
//     const currentTime = new Date();
  
//     const filteredSchedule = scheduleList.filter(schedule => {
//       const scheduleTime = new Date(schedule.time);
//       return scheduleTime > currentTime;
//     });
  
  return (
    <div
      className={viewWaterbusStyle.viewPage}
    >
        <h1> Schedule List </h1>
      <table className={viewWaterbusStyle.table}>
        <thead>
          <tr>
            <th className={viewWaterbusStyle.th}>Schedule Id</th>
            <th className={viewWaterbusStyle.th}>Departure</th>
            <th className={viewWaterbusStyle.th}>Direction</th>
            <th className={viewWaterbusStyle.th}>Time</th>
            <th className={viewWaterbusStyle.th}>Trip Id</th>
            <th className={viewWaterbusStyle.th}>Waterbus Id</th>
          </tr>
        </thead>
        <tbody>
          {scheduleList?.map((schedule, index) => (
            <tr className={viewWaterbusStyle.tr} key={index}>
              <td className={viewWaterbusStyle.td}>{schedule.scheduleid}</td>
              <td className={viewWaterbusStyle.td}>{schedule.departure}</td>
              <td className={viewWaterbusStyle.td}>{schedule.dir}</td>
              <td className={viewWaterbusStyle.td}>{schedule.time}</td>
              <td className={viewWaterbusStyle.td}>{schedule.tripid}</td>
              <td className={viewWaterbusStyle.td}>{schedule.waterbusid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
