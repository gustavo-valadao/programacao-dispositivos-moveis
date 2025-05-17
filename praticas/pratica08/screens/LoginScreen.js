import { TextInput, Button, Text, HelperText   } from "react-native-paper"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { useForm, Controller } from "react-hook-form"

function LoginScreen ({navigation}) {

    const { control, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        alert("Login realizado com sucesso!");
    }



    return (

        <View style={styles.container}>

            <Controller
                control={control}
                name="email"
                rules={{required: "O email é obrigatório"}}
                render={
                    ({field: {onChange, value}}) => (

                        <TextInput 
                            label= "E-mail" 
                            keyboardType="email-address" 
                            autoCapitalize="none" 
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                            error={!!errors.email}
                        />

                    )
                }
            
            />

            {errors.email && <HelperText type="error">{errors.email.message}</HelperText>}


            <Controller 
                control={control}
                name="senha"
                rules={{
                    required: "A senha é obrigatória",
                    minLength: {value: 6, message:"A senha deve ter pelo menos 6 caracteres"}
                }}
                render={
                    ({field: {onChange, value}}) => (
                        <TextInput 
                            label= "Senha" 
                            secureTextEntry 
                            style={styles.input}
                            value={value}
                            onChangeText={onChange}
                            error={!!errors.senha}
                        />

                    )
                }           
            />

            {errors.senha && <HelperText type="error">{errors.senha.message}</HelperText>}


            <Button 
                mode="contained" 
                style={styles.input}
                onPress={handleSubmit(onSubmit)}
            >
                Entrar
            </Button>

            <View style={styles.viewEsqueceuSenha}>

                <Text>Esqueceu sua senha? </Text>

                <TouchableOpacity onPress={() => navigation.navigate("RecuperarSenha")} >

                    <Text style={styles.linkText}>Recuperar senha</Text>

                </TouchableOpacity>


                
            </View>

            <View style={styles.viewCriarConta}>

                <TouchableOpacity onPress={() => navigation.navigate("CriarConta")} >

                    <Text style={styles.linkText}>Criar Conta</Text>

                </TouchableOpacity>

            </ View>

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

    viewCriarConta: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 16,
    },
    
})

export default LoginScreen;