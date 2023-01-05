import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Homepage from './pages/homepage/homepage'
import Recipes from './pages/homepage/recipes/recipes'

import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/recipes" element={<Recipes/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
