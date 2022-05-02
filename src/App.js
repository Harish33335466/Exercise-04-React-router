import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from './About';
import Blogs from "./Blog";
import Feeds from "./Feeds";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/'  exact element={<Home></Home>}></Route>
        </Routes>
        <Routes>
          <Route path='/About'  element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path='/Blogs'  element={<Blogs></Blogs>}></Route>
        </Routes>
        <Routes>
          <Route path='/Feeds'  element={<Feeds></Feeds>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
