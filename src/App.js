import './App.css';
import Home from './components/Home/Home.lazy';
import About from './components/About/About.lazy';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:theUrlParam" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
