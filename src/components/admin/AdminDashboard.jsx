import adminDashboardStyle from "./adminDashboard.module.css";

export default function AdminDashboard () {
    return (
        <div className={adminDashboardStyle.dashboard}>
            <span className={adminDashboardStyle.button}> Add Waterbus </span>
            <span className={adminDashboardStyle.button}> Scedule Waterbus </span>
            <span className={adminDashboardStyle.button}> Cancel Trip </span>
            <span className={adminDashboardStyle.button}> Billing Statement </span>

        </div>
    ); 
}