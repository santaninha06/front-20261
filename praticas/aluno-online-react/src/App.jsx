import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />

        
        <Route path="requerimentos" element={<h1>Requerimentos</h1>} />
        <Route path="sair" element={<h1>Sair</h1>} />
      </Route>
    </Routes>
  );
}

export default App;