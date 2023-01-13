import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Homepage from "./pages/homepage/homepage";
import Recipes from "./pages/recipes/recipes";

import "./App.css";
import Main from "./admin/pages/main/main";

function App() {
  return (
    <div className="pattern2">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/admin" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
