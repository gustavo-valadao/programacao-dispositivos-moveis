import { TextInput, Button, Text   } from "react-native-paper"
import { View, StyleSheet, TouchableOpacity } from "react-native"

function LoginScreen ({navigation}) {
    return (
        <View style={styles.container}>


            <TextInput label= "E-mail" keyboardType="email-address" autoCapitalize="none" style={styles.input}/>
            <TextInput label= "Senha" secureTextEntry style={styles.input}/>
            <Button mode="contained" style={styles.input}>Entrar</Button>
            <View style={styles.viewEsqueceuSenha}>
                <Text>Esqueceu sua senha? </Text>
                <TouchableOpacity >
                    <Text style={styles.linkText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>

        </View>
        

    )
}

const styles = StyleSheet.create({

    container: { 
        flex: 1,     
        padding: 24,
        justifyContent: 'center', 
    },

    input: {
        marginBottom: 16,
    },

    linkText: {
        color: '#6200ee',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },

    viewEsqueceuSenha: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 24,
    },
    
})

export default LoginScreen;