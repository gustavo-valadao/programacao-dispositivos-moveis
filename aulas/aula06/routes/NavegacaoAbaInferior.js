import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

function NavegacaoAbaInferior() {

    return (

        <Tab.Navigator initialRouteName='Home'>

            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Perfil" component={Perfil}/>

        </Tab.Navigator>

    );
}

export default NavegacaoAbaInferior;