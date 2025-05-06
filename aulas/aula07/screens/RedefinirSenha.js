import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useState } from "react";

function RedefinirSenha() {

    const [email, setEmail] = useState("")
    const [erro, setErro] = useState("")

    const trataTexto = (text) => {

        setEmail(text);                         // Primeiro salva o estado
        validaEmail();                          // Depois faz a validação de erros

    }

    const validaEmail = () => {

        // Tratamento de erros:

        if(!email) {
            setErro("E-mail é obrigatório");
            return false;                       // Não está válido
        } 

        if (!email.includes("@")){
            setErro("E-mail inválido")
            return false;                       // Não está válido
        }

        return true;                            // Está válido (não houve return em nenhum erro.)

    }


    const trataEnviar = () => {
        
        // Se não houver não validou o email, retorna e não envia.
        if (!validaEmail()) {
            return;
        }

        // Se continuou, é pq está válido.
        setEmail("");
        setErro("");
        alert("E-mail enviado!");            

    }


    return (
        <View style={{ flex: 1, padding: 16 }}>

            <TextInput 
                mode="outlined"                     
                autoCapitalize="none"               
                keyboardType="email-address"        
                label={"Email"} 
                value={email} 
                style={{marginBottom: 16}}
                onChangeText={trataTexto}
                error={erro != ""}              // Layout em vermelho se houver erro.
            />

            <HelperText 
                type="error"                    // Pode ser "info" (preto) ou "error" (vermelho)
                visible={erro}                  //Visible é um booleano (true/false). Nesse caso, se existe erro, exibe o helperText
            >
                {erro}                      
            </HelperText>

            <Button 
                mode="contained" 
                onPress={trataEnviar}
            >
                Enviar
            </Button>

        </View>

    );

}

export default RedefinirSenha;