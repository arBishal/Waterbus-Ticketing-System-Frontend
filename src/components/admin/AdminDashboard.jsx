import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import adminDashboardStyle from "./admin.module.css";

export default function AdminDashboard () {

    const history = useHistory();

    const handleClickAdd = useCallback(
      () => history.push("/admin/dashboard/add"),
      [history]
    );

    const handleClickView = useCallback(
        () => history.push("/admin/dashboard/view"),
        [history]
      );

    const handleClickSchedule = useCallback(
        () => history.push("/admin/dashboard/schedule"),
        [history]
      );

    return (
        <div className={adminDashboardStyle.dashboard}>
            <span className={adminDashboardStyle.button} onClick={handleClickAdd}> Add a Waterbus </span>
            <span className={adminDashboardStyle.button} onClick={handleClickView}> View Waterbuses </span>
            <span className={adminDashboardStyle.button} onClick={handleClickSchedule}> Scedule a Waterbus </span>
            <span className={adminDashboardStyle.button}> Cancel a Trip </span>
            <span className={adminDashboardStyle.button}> Billing Statements </span>

        </div>
    ); 
}