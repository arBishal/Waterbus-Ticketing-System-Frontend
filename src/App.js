import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import Billboard from "./components/Billboard";
import AddWaterbus from "./components/admin/AddWaterbus";
import ViewWaterbus from "./components/admin/ViewWaterbus";
import ScheduleWaterbus from "./components/admin/ScheduleWaterbus";
import ViewSchedule from "./components/admin/ViewSchedule";
import TicketingGulshan from "./components/user/TicketingGulshan";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          
          {/* admin side */}
          
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>

          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>

          <Route exact path="/admin/dashboard/add">
            <AddWaterbus />
          </Route>

          <Route exact path="/admin/dashboard/view-waterbus">
            <ViewWaterbus />
          </Route>

          <Route exact path="/admin/dashboard/schedule">
            <ScheduleWaterbus />
          </Route>

          <Route exact path="/admin/dashboard/view-schedule">
            <ViewSchedule />
          </Route>

          {/* user side */}

          <Route exact path="/user/gulshan">
            <TicketingGulshan />
          </Route>

        </Switch>
        
        <Billboard />
      </div>
    </Router>
  );
}

export default App;
