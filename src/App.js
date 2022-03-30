import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import NavBar from "./NavBar";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
