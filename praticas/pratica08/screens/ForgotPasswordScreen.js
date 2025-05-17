import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

import { useState } from "react";



function ForgotPasswordScreen({navigation}) {

    const [email, setEmail] = useState("")
    const [erro, setErro ] = useState("")   

    const validarEmail = () => {
        if(!email) {
            setErro("Email é obrigatório")
        } else if (!email.includes("@")) {
            setErro("Email inválido")
        } else {
            setErro("");
            alert("Uma nova senha foi enviada ao seu e-mail!")
            setEmail("");

            navigation.goBack()
            
        }
    }


    return (
        
        <ScrollView contentContainerStyle={styles.container}>

            <TextInput
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                error={!!erro}
                />

            {erro && <HelperText type="error">{erro}</HelperText>}


            <Button 
                mode="contained"
                onPress={validarEmail}

                >
                Recuperar Senha
            </Button>

            <TouchableOpacity onPress={()=>{navigation.goBack("Login")}}>
                <Text style={styles.link}>Voltar para Login</Text>
            </TouchableOpacity>
            

        </ScrollView>

        

    )
}

const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,     
        padding: 24,
        justifyContent: 'center',
         
        
    },
    
    input: {
        marginBottom: 16,
    },
    
    link: {
        color: '#6200ee',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop: 16
    },
})

export default ForgotPasswordScreen;