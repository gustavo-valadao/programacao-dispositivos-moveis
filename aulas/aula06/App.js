import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Perfil from './screens/Perfil';
import NavegacaoPilha from './routes/NavegacaoPilha';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <SafeAreaProvider>
      
      <NavigationContainer>
        
        {/*     Estava assim antes de refatorar para a "navegação pilha":

        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Perfil" component={Perfil}/>
        </Stack.Navigator> 

        */}

        {/* {<NavegacaoPilha/>} */}
        <NavegacaoAbaInferior/>
      
      </NavigationContainer>
    
    </SafeAreaProvider>

  );
}


