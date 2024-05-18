import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminLogin from "./components/admin/AdminLogin";
import Billboard from "./components/Billboard";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          
          <Route path="/admin/login">
            <AdminLogin />
          </Route>

          <Route path="/admin/dashboard">
            <AdminDashboard />
          </Route>

        </Switch>
        
        <Billboard />
      </div>
    </Router>
  );
}

export default App;
