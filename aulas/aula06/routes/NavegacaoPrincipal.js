
import { useContext } from "react";
import { NavigationContainer } 
from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import NavegacaoPilha from "./NavegacaoPilha";
import NavegacaoGaveta from "./NavegacaoGaveta";

function NavegacaoPrincipal() {
  const { logado } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {logado ? (  
      <NavegacaoGaveta />
      ) : (
      <NavegacaoPilha />
      )}
    </NavigationContainer>
  );
}

export default NavegacaoPrincipal;
