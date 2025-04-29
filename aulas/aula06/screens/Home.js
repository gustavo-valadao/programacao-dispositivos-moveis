
import { useContext } from 'react';
import { View, Text, Button} from 'react-native';
import { AuthContext } from '../contexts/AuthContext';

function Home({ navigation }) {
    const { logout } = useContext(AuthContext);
    return <View style={{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center"}}>
            <Text>Home</Text>
            <Button title="Ir p/ Perfil"
            onPress={() =>
                 navigation.navigate("Perfil", 
                 {id: 1, nome: "Jose"}
                 )}
            />
            <Button title="Sair"
            onPress={()=> logout()}/>
        </View>
}

export default Home;