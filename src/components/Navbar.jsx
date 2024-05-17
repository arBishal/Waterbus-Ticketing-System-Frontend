import DateTime from "./DateTime";
import navbarStyle from "./navbar.module.css";

export default function Navbar () {    
    return (
        <div className={navbarStyle.navbar}>
            <span className={navbarStyle.title}>Waterbus Ticketing System</span>
            <DateTime/>
        </div>
    ); 
};