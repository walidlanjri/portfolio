import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div className="NavBar">
            <h1 id="title">WELCOME TO MY PORTFOLIO</h1>
            <div className="Links">
                <div className="upper">
                    <Link to="/">Home</Link>
                    <Link to="/About">About</Link>
                </div>
                <div className="lower">
                    <Link to="/Projects">Projects</Link>
                    <Link to="/Contact">Contact</Link>
                </div>
            </div>
            
        </div>
     );
}
 
export default NavBar;