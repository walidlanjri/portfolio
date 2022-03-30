import image from "./Images/WALID.jpeg";
import { Link } from "react-router-dom";
const Home = () => {

    return ( 
        <div className="home">
            <h3>Hello there </h3>
            <h2>This is <p className="redText">LANJRI WALID</p> </h2>
            <img id="walidImage" src={image} />
            <p id="desc">An engineering student at the National School of Computer Science - <p className="redText">ENSIAS</p></p>
            <Link to="/Projects">
                <button>View my work</button>
            </Link>
            <a href="./CV/CV.pdf" download>
                <button>Download my CV</button>
            </a>
            
            
            
        </div>
     );
}
 
export default Home;