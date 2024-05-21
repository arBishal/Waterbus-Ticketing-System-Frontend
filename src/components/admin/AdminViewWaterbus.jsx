import { useState } from "react";

import viewWaterbusStyle from "./admin.module.css";

export default function AdminViewWaterbus() {
  const [waterbusList, setWaterbusList] = useState([
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
    {
      id: 1,
      name: "MV Habijabi",
      type: "nonac",
      category: "luxary",
      capacity: "25",
      basefare: "20",
    },
    {
      id: 2,
      name: "MV Hijibiji",
      type: "ac",
      category: "ordinary",
      capacity: "30",
      basefare: "25",
    },
  ]);

  return (
    <div
      className={viewWaterbusStyle.page}
      style={{
        padding: "24px",
        boxSizing: "border-box",
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
          {waterbusList.map((waterbus, index) => (
            <tr className={viewWaterbusStyle.tr} key={index}>
              <td className={viewWaterbusStyle.td}>{waterbus.id}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.name}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.type}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.category}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.capacity}</td>
              <td className={viewWaterbusStyle.td}>{waterbus.basefare}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
