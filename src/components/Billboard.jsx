import { useState, useEffect } from "react";
import axios from "axios";

import billboardStyle from "./billboard.module.css"

export default function Billboard () {
    const [announcement, setAnnouncement] = useState("There is no announcement at the moment.")
    const [error, setError] = useState();

    useEffect(() => {
        axios.get('http://localhost:8090/trial/getNotice')
          .then(response => {
            setAnnouncement(response.data);
          })
          .catch(error => {
            setError(error);
          });
      },);

    return (
        <div className={billboardStyle.billboard}>
                <marquee>{announcement}</marquee>
        </div>
    );
};