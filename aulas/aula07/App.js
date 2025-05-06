import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from './routes/MainNavigator';


export default function App() {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        
        <MainNavigator/>

      </NavigationContainer>
    </SafeAreaProvider>



  );
}


