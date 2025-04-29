import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [logado, setLogado] = useState(false);

  const login = () => setLogado(true);

  const logout = () => setLogado(false);

  return (
    <AuthContext.Provider value={{ logado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
