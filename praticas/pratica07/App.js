import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import RecoverScreen from "./screens/RecoverScreen";
import StackNavigator from "./routes/StackNavigator";
import BottomTabNavigator from "./routes/BottomTabNavigator";

import MusicScreen from "./screens/MusicScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <BottomTabNavigator/>


      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;