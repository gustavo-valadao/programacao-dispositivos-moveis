import { ScrollView, View } from 'react-native';
import { TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

function CriarConta() {

const schema = Yup.object().shape({                                                                       // Criação de um esquema yup para validação centralizada dos campos
        nome: Yup.string().required("Nome é obrigatório"),
        email: Yup.string().required("Email é obrigatório").email("Email inválido"),
        senha: Yup.string().required("Senha é obrigatória").min(8, "A senha deve conter pelo menos 8 caracteres"),
        confirmaSenha: Yup.string().oneOf([Yup.ref("senha"), null], "As senhas não coincidem")
    })

    const { control, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(schema)});     // usando as validações no formulário

    return (
        <ScrollView>

            <View style={{flex: 1, padding: 16}}>

                <Controller 
                    control={control}
                    name="nome"
                    render={
                        ({field: {value, onChange}}) => (
                            <TextInput
                                label="Nome"
                                mode="outlined"
                                autoCapitalize='words'
                                value={value}
                                onChangeText={onChange}
                                />
                                )    
                            }
                            />


                <HelperText 
                    type={"error"}
                    visible={errors.nome}
                    >
                    {errors.nome?.message}            
                </HelperText>


                <Controller 
                    control={control}
                    name="email"
                    render={
                        ({field: {value, onChange}}) => (
                            <TextInput
                            label="E-mail"
                                keyboardType="email-address"
                                mode="outlined"
                                value={value}
                                onChangeText={onChange}
                                />
                                )
                            }
                            
                            />


                <HelperText 
                    type={"error"}
                    visible={errors.email}
                    >
                    {errors.email?.message}
                </HelperText>


                <Controller
                    control={control}
                    name="senha"
                    render= {
                        ({field: {value, onChange}}) => (
                            <TextInput 
                            label="Senha"
                            mode='outlined'
                            secureTextEntry
                            autoCapitalize='none'
                            value={value}
                            onChangeText={onChange}
                            />
                            )
                        }
                        />

                <HelperText 
                    type='error'
                    visible={errors.senha}
                    >
                    {errors.senha?.message}
                </HelperText>

                <Controller 
                    control={control}
                    name="confirmaSenha"
                    render={
                        ({field: {value, onChange}}) => (
                            <TextInput
                            label="Confirmar Senha"
                            mode="outlined"
                            secureTextEntry
                            autoCapitalize='none'
                            value={value}
                            onChangeText={onChange}
                            />
                            )
                        }
                        
                />

                <HelperText 
                    type={"error"}
                    visible={errors.confirmaSenha}
                >
                    {errors.confirmaSenha?.message}            
                </HelperText>

                <Button
                    mode="contained"
                    onPress={ 
                        handleSubmit(
                            (data) => alert("ok")
                        ) 
                    }
                >
                    Criar Conta
                </Button>


            </View>
        </ScrollView>
    );

}

export default CriarConta;