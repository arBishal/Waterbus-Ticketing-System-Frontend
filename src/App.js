import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import Billboard from "./components/Billboard";
import AddWaterbus from "./components/admin/AddWaterbus";
import AdminViewWaterbus from "./components/admin/ViewWaterbus";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route exact path="/admin/login">
            <AdminLogin />
          </Route>

          <Route exact path="/admin/dashboard">
            <AdminDashboard />
          </Route>

          <Route exact path="/admin/dashboard/add">
            <AddWaterbus />
          </Route>

          <Route exact path="/admin/dashboard/view">
            <AdminViewWaterbus />
          </Route>

        </Switch>
        
        <Billboard />
      </div>
    </Router>
  );
}

export default App;
