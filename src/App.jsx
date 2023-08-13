import { BrowserRouter, Route, Routes } from "react-router-dom";
import './style.scss'

import Home from "./pages/Home";
import Instructions from "./pages/Instructions"
import About from "./pages/About";

import GameLoop from "./components/GameLoop";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="APP">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameLoop />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    </div>
    )
}

export default App;
