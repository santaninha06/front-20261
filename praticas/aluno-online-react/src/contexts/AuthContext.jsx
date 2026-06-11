import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function getInitialAuth() {
  const usuarioSalvo = localStorage.getItem("usuario");
  const token = localStorage.getItem("token");

  if (usuarioSalvo && token) {
    return {
      usuario: JSON.parse(usuarioSalvo),
      autenticado: true,
    };
  }

  return {
    usuario: null,
    autenticado: false,
  };
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getInitialAuth);

  const login = (dadosUsuario, token) => {
    localStorage.setItem("usuario", JSON.stringify(dadosUsuario));
    localStorage.setItem("token", token);

    setAuth({
      usuario: dadosUsuario,
      autenticado: true,
    });
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");

    setAuth({
      usuario: null,
      autenticado: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        autenticado: auth.autenticado,
        usuario: auth.usuario,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}