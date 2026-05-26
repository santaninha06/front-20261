import { Routes, Route, Navigate } from "react-router";

import Layout from "./components/Layout";


import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import RequerimentoForm from "./forms/RequerimentoForm";


import "./App.css";

import { useAuth } from "./contexts/AuthContext";

function App() {

  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Dashboard />} />

        <Route path="notas" element={<Notas />} />

        <Route path="faltas" element={<Faltas />} />

        <Route path="boletos" element={<Boletos />} />

       
        <Route path="requerimentos">
          <Route index element={<Requerimentos />} />

          <Route
            path="novo"
            element={<RequerimentoForm />}
          />
        </Route>

        <Route path="sair" element={<h1>Sair</h1>} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;
