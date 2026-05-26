import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [autenticado, setAutenticado] = useState(false);

  const [usuario, setUsuario] = useState({});

  function login(dadosUsuario) {

    setUsuario(dadosUsuario);

    setAutenticado(true);
  }

  function logout() {

    setUsuario({});

    setAutenticado(false);
  }

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