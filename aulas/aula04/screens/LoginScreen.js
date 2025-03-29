import { View,  StyleSheet } from 'react-native';
import { Button, IconButton, Text, TextInput } from 'react-native-paper';


function LoginScreen() {
    return (
        <View style={styles.container}>

            <Text style={[styles.space, styles.textCenter]} variant="headlineLarge">Login</Text>

            <TextInput 
                style={styles.space} 
                mode="outlined" 
                label= "E-mail"
                right= {<TextInput.Icon icon="email"/>}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput
                style={styles.space}
                mode="outlined"
                label="Senha"
                right={<TextInput.Icon icon="eye"/>}
                secureTextEntry 
            />

            <Button mode="contained" style={styles.space}>Entrar</Button>

            <Text style={styles.textCenter} variant="labelMedium">Ou entre com:</Text>
            
            <View style={styles.IconButtons} >
                <IconButton icon="google"/>
                <IconButton icon='facebook'/>
            </View>

        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 16,
    },

    space: {
        marginBottom: 8,
    }, 

    textCenter: {
        alignSelf: "center"
    }, 

    IconButtons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

});

export default LoginScreen;