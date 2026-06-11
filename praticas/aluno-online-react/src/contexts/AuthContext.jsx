/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    const token = localStorage.getItem("token");

    if (usuarioSalvo && token) {
      const usuarioParse = JSON.parse(usuarioSalvo);

      setUsuario(usuarioParse);
      setAutenticado(true);
    }
  }, []);

  const login = (dadosUsuario, token) => {
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
    localStorage.setItem("token", token);

    setUsuario(dadosUsuario);
    setAutenticado(true);
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");

    setUsuario(null);
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider
      value={{
        autenticado,
        usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}