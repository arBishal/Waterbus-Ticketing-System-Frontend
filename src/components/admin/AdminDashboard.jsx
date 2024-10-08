import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import adminDashboardStyle from "./admin.module.css";

export default function AdminDashboard () {

    const history = useHistory();

    const handleClickAdd = useCallback(
      () => history.push("/admin/dashboard/add"),
      [history]
    );

    const handleClickViewWaterbus = useCallback(
        () => history.push("/admin/dashboard/view-waterbus"),
        [history]
      );

    const handleClickSchedule = useCallback(
        () => history.push("/admin/dashboard/schedule"),
        [history]
      );
      
    const handleClickViewSchedule = useCallback(
      () => history.push("/admin/dashboard/view-schedule"),
      [history]
    );

    const handleClickAnnouncement = useCallback(
      () => history.push("/admin/dashboard/announcement"),
      [history]
    );

    return (
        <div className={adminDashboardStyle.dashboard}>
            <span className={adminDashboardStyle.button} onClick={handleClickAdd}> Add a Waterbus </span>
            <span className={adminDashboardStyle.button} onClick={handleClickViewWaterbus}> View Waterbuses </span>
            <span className={adminDashboardStyle.button} onClick={handleClickSchedule}> Scedule a Waterbus </span>
            <span className={adminDashboardStyle.button} onClick={handleClickViewSchedule}> View Schedules </span>
            <span className={adminDashboardStyle.button} onClick={handleClickAnnouncement}> Make Announcement </span>
            <span className={adminDashboardStyle.button}> Billing Statements </span>

        </div>
    ); 
}