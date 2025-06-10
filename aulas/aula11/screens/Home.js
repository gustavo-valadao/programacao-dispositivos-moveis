import { View } from 'react-native'
import { useContext } from 'react';
import { Text, Button } from 'react-native-paper';
import { AuthContext } from '../contexts/AuthContext';


function Home() {

    const {usuario, logout} = useContext(AuthContext)

    return (
        <View style={{flex:1, padding: 16, justifyContent: "space-around"}}>
            <Text variant='titleLarge'> Olá, {usuario.login}</Text>
            <Button mode='contained' onPress={() => logout()}> Sair</Button>

        </View>
    );
}

export default Home;