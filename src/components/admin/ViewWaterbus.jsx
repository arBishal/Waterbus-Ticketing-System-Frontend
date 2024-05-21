import { useState, useEffect } from "react";
import axios from "axios";

import viewWaterbusStyle from "./admin.module.css";

export default function AdminViewWaterbus() {

  const [waterbusList, setWaterbusList] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    axios.get('http://localhost:8090/waterbus/getList')
      .then(response => {
        setWaterbusList(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div
      className={viewWaterbusStyle.viewPage}
      style={{

      }}
    >
      <table className={viewWaterbusStyle.table}>
        <thead>
          <tr>
            <th className={viewWaterbusStyle.th}>Id</th>
            <th className={viewWaterbusStyle.th}>Name</th>
            <th className={viewWaterbusStyle.th}>Type</th>
            <th className={viewWaterbusStyle.th}>Category</th>
            <th className={viewWaterbusStyle.th}>Capacity</th>
            <th className={viewWaterbusStyle.th}>Fare</th>
          </tr>
        </thead>
        <tbody>
          {waterbusList?.map((waterbus, index) => (
            <tr className={viewWaterbusStyle.tr} key={index}>
              <td className={viewWaterbusStyle.td}>{waterbus.id}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.name}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.type}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.category}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.capacity}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.baseFare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
