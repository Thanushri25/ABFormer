import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Prediction from "./pages/Prediction"
import ESM2 from "./pages/ESM2"
import IgFold from "./pages/IgFold"
import AntiBinder from "./pages/AntiBinder"
import FGBert from "./pages/FGBert"

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/prediction" element={<Prediction />} />

      <Route path="/esm2" element={<ESM2 />} />
      <Route path="/igfold" element={<IgFold />} />
      <Route path="/antibinder" element={<AntiBinder />} />
      <Route path="/fgbert" element={<FGBert />} />

    </Routes>
  )
}

export default App