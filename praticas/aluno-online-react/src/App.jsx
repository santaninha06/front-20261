
import { Routes, Route, Navigate } from "react-router";
import { useAuth } from "./contexts/AuthContext";

import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Login from "./pages/Login";
import Requerimentos from "./pages/Requerimentos";
import RequerimentoForm from "./forms/RequerimentoForm";

import "./App.css";

function App() {
  const { autenticado } = useAuth();

  return (
    <Routes>

      {/* rota pública */}
      <Route path="/login" element={<Login />} />

      {/* rotas protegidas */}
      <Route
        path="/"
        element={autenticado ? <Layout /> : <Navigate to="/login" />}
      >
        <Route index element={<Dashboard />} />

        <Route path="notas" element={<Notas />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="boletos" element={<Boletos />} />

        <Route path="requerimentos">
          <Route index element={<Requerimentos />} />
          <Route path="novo" element={<RequerimentoForm />} />
        </Route>
      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
  );
}

export default App;