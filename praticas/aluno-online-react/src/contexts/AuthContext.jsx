 /* eslint-disable react-refresh/only-export-components */

 import { createContext, useContext, useState } from "react";

 const AuthContext = createContext();
 
 export function AuthProvider({ children }) {
   const [autenticado, setAutenticado] = useState(false);
   const [usuario, setUsuario] = useState(null);
 
   const login = (dadosUsuario) => {
     setUsuario(dadosUsuario);
     setAutenticado(true);
   };
 
   const logout = () => {
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