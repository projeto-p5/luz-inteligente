import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./PAGINAS/inicio";
import NaoEncontrado from "./PAGINAS/NaoEncontrado";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="*" element={<NaoEncontrado />} />
    </Routes>
  </BrowserRouter>
);

export default App;