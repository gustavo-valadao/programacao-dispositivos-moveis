import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, HelperText, Text, TextInput } from "react-native-paper";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';


const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    senha: Yup.string()
        .min(6, "Senha deve ter no mínimo 6 caracteres")
        .required("Senha é obrigatória"),
    confirmarSenha: Yup.string()
        .oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
        .required("Confirme a senha"),
});
  


function SignupScreen({navigation}) {

    const { control, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
        alert("Conta criada com sucesso")
    }

    return (
        <View style={styles.container}>

            <Controller
                control={control}
                name="nome"
                render={
                    ({field: {onChange, value}}) => (
                        
                        <TextInput
                            label="Nome"
                            keyboardType="default"
                            autoCapitalize="words"
                            style={styles.input}   
                            value={value}             
                            onChangeText={onChange}
                            error={!!errors.nome}
                        />
                    )
                }
            />

            {errors.nome && <HelperText type="error">{errors.nome.message}</HelperText>}

            <Controller
                control={control}
                name="email"
                render={
                    ({field: {onChange, value}}) => (
                        
                        <TextInput
                        label="Email"
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
                render={
                    ({field: {onChange, value}}) => (
                        
                        <TextInput
                            label="Senha"
                            keyboardType="default"
                            autoCapitalize="none"
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

            <Controller
                control={control}
                name="confirmarSenha"
                render={
                    ({field: {onChange, value}}) => (
                        
                        <TextInput
                            label="Confirmar Senha"
                            keyboardType="default"
                            autoCapitalize="none"
                            secureTextEntry
                            style={styles.input}
                            value={value}             
                            onChangeText={onChange}
                            error={!!errors.confirmarSenha}
                        />
                          
                    )
                }
            />

            {errors.confirmarSenha && <HelperText type="error">{errors.confirmarSenha.message}</HelperText>}


            <Button 
                mode="contained"
                onPress={handleSubmit(onSubmit)}
            >
                Criar
            </Button>

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

export default SignupScreen;