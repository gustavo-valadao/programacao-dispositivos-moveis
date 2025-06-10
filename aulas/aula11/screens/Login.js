import { View } from 'react-native'
import { useForm, Controller } from 'react-hook-form';
import { Text, TextInput, Button, HelperText } from 'react-native-paper';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function Login({navigation}) {

    const { control, handleSubmit } = useForm();
    const { erro, login } = useContext(AuthContext)

    const onSubmit = (data) => {
        login({...data});

    }

    return (
        <View style={{flex:1, padding: 16}}>

            <Controller 
                control={control}
                name="email"
                render={({field: {value, onChange}}) => (
                    <TextInput 
                        style={{marginBottom:8}}
                        label="E-mail"
                        mode="outlined"
                        keyboardType='email-address'
                        value={value}
                        onChangeText={onChange}
                    
                    />
                )} 
            />

            <Controller 
                control={control}
                name="senha"
                render={({field: {value, onChange}}) => (
                    <TextInput 
                        style={{marginBottom:8}}
                        label="Senha"
                        mode="outlined"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                    
                    />
                )} 
            />

            <HelperText type="error" visible={!!erro}>
                {erro}
            </HelperText>

            <Button
                mode="outlined"
                onPress={() => navigation.navigate("Registrar")}
                style={{marginBottom:8}}
            >
                Registrar
            </Button>

            <Button
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                style={{marginBottom:8}}
            >
                Entrar
            </Button>

        </View>
    );
}

export default Login;