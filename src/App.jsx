import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Furniture from "./pages/Furniture";
import Lighting from "./pages/Lighting";
import Accessories from "./pages/Accessories";
import Textiles from "./pages/Textiles";
import Rugs from "./pages/Rugs"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='furniture' element={<Furniture />} />
          <Route path='lighting' element={<Lighting />} />
          <Route path='accessories' element={<Accessories />} />
          <Route path='rugs' element={<Rugs />} />
          <Route path='textiles' element={<Textiles />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
