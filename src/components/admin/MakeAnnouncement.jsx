import { useState } from "react";
import axios from "axios";

import announcementStyle from "./admin.module.css"

export default function MakeAnnouncement() {
    const [announcement, setAnnouncement] = useState("");

    const handleSubmitAnnouncement = (e) => {
        // e.preventDefault();

        fetch("http://localhost:8090/trial/addNotice", {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(announcement)
        }).then(response => {
            if (response.ok) {
                console.log("response ok", announcement);
                window.alert("Anounced!");
            } else {
                console.error("Failed!", response.statusText);
            }
        }).catch(error => {
            console.error("Error:", error);
        });

    };

    return (
        <div>
            <div className={announcementStyle.page}>
                <h1 className={announcementStyle.title}>Make an Announcement</h1>
                <form
                    className={announcementStyle.form}
                    onSubmit={handleSubmitAnnouncement}
                >
                    <div className={announcementStyle.innerForm}>
                        <textarea
                            name="announcement"
                            className={announcementStyle.input}
                            value={announcement}
                            onChange={(e) => setAnnouncement(e.target.value)}
                            placeholder="Make an Announcement!"
                        />
                    </div>

                    <div className={announcementStyle.buttonCluster}>
                        <a
                            href="http://localhost:3000/admin/dashboard"
                            className={announcementStyle.buttonGhost}
                            style={{ marginTop: "16px" }}
                        >
                            Back
                        </a>

                        <button
                            className={announcementStyle.button}
                            style={{ marginTop: "16px", width: "148px" }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};