import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';

import adminDashboardStyle from "./adminDashboard.module.css";

export default function AdminDashboard () {
    return (
        <div className={adminDashboardStyle.dashboard}>
            <span className={adminDashboardStyle.button}> Add a Waterbus </span>
            <span className={adminDashboardStyle.button}> View Waterbuses </span>
            <span className={adminDashboardStyle.button}> Scedule a Waterbus </span>
            <span className={adminDashboardStyle.button}> Cancel a Trip </span>
            <span className={adminDashboardStyle.button}> Billing Statements </span>

        </div>
    ); 
}