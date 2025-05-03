import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

function RecoverScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TextInput
                label="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
            />

            <Button mode="contained">Recuperar Senha</Button>

            <TouchableOpacity onPress={()=>{navigation.goBack("Login")}}>
                <Text style={styles.link}>Voltar para Login</Text>
            </TouchableOpacity>
            


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

    link: {
        color: '#6200ee',
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        alignSelf: "center",
        marginTop: 16
    },
})

export default RecoverScreen;