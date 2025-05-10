import { View } from 'react-native'
import { TextInput, HelperText, Button  } from 'react-native-paper';

import { useForm, Controller } from 'react-hook-form'

// useForm é um hook que vai gerenciar os estados e eventos do formulário.
// Controller é o que vai ligar os campos ao useForm
//      Rules: possui validadores dos campos. Exemplos:
//              required; maxLength; minLength; max (valor máximo); min; pattern;
// Note que dessa maneira eu não preciso declarar vários estados para gerenciar os inputs através do useState.
// handleSubmit gerencia os estados que serão enviados no envio. 
// formState: recebe diversas informações do formulário. Vamos usar para recuperar e exibir os erros.


function Login({ navigation }) {

    const { control, handleSubmit, formState: {errors} } = useForm();

    return (
        <View style={{flex: 1, padding: 16}}>

            <Controller             
                control={control}      
                name="email"
                rules={{                                    // Rules são as regras de validação
                    required: "E-mail é obrigatório",        
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "E-mail inválido"
                    }
                }}
                render={({field: {value, onChange}}) => (
                    <TextInput 
                        label='E-mail'
                        mode='outlined'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={value}                       // Recebe o valor do estado
                        onChangeText={onChange}             // Atualiza o valor
                        error={errors.email}                // // O error do text input pinta a margem de vermelho se existir erro.
                    />
                )}
            />

            <HelperText
                type="error"
                visible={errors.email}                      // Se tem erro, exibe o helper text. "errors.email?.message" texta se o erro do email não é nulo.
            >                                               
                {errors.email?.message}                     
            </HelperText>                                       



            <Controller
                control={control}
                name="senha"
                rules={{
                    required: "Senha é obrigatória",
                    minLength: {
                        value: 8,
                        message: "A senha deve ter no mínimo 8 caracteres!"
                    }
                }}
                render={({ field: {value, onChange}}) => (  // renderização do campo, com valor e onChange para atualizar o valor.
                    <TextInput
                        label='Senha'
                        mode='outlined'
                        value={value}                       // Recebe o valor do estado
                        onChangeText={onChange}             // Atualiza o valor
                        secureTextEntry
                        error={errors.senha}                // O error do text input pinta a margem de vermelho se existir erro.
                    />
                )}
            />

            <HelperText
                type="error"
                visible={errors.senha}
            >
                {errors.senha?.message}
            </HelperText>





            <Button
                mode='contained'
                onPress={handleSubmit((data) => alert("Ok"))}     // handleSubmit recebe um objeto data, que contem todos os dados enviados, e a partir disso você pode manipular os dados.
                style={{marginBottom: 16}}
            >
                Entrar
            </Button>

            <Button
                mode='outlined'
                onPress={() => navigation.navigate("Criar Conta")}      // navega para "criar conta" (nome da tela no main navigator)
                style={{marginBottom: 16}}
            >
                Criar conta
            </Button>

            <Button
                mode='outlined'
                onPress={()=> navigation.navigate("Redefinir Senha")}   // navega para "Redefinir Senha" (nome da tela no main navigator)
                style={{marginBottom: 16}}
            >
                Redefinir Senha
            </Button>



        </View>


    );

}

export default Login;