import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home';
import Login from '../screens/Login';
import Registrar from '../screens/Registrar';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const Stack = createNativeStackNavigator();

function StackNavigator() {

    const { usuario } = useContext(AuthContext)

    return (
        <Stack.Navigator>
            {usuario.logado 
                ? 
                    (<>
                        <Stack.Screen name="Home" component={Home} />
                    </>)    
                :                     
                    (<>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Registrar" component={Registrar} />
                    </>)  
            }
        </Stack.Navigator>
    )
}

export default StackNavigator;