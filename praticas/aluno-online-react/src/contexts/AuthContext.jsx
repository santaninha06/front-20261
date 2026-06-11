import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    usuario: null,
    autenticado: false,
  });

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");
    const token = localStorage.getItem("token");

    if (usuarioSalvo && token) {
      setAuth({
        usuario: JSON.parse(usuarioSalvo),
        autenticado: true,
      });
    }
  }, []);

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

export function useAuth() {
  return useContext(AuthContext);
}