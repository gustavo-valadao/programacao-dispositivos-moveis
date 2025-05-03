import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import StackNavigator from "./routes/StackNavigator";
import LoginScreen from "./screens/LoginScreen";
import RecoverScreen from "./screens/RecoverScreen";

import BottomTabNavigator from "./routes/BottomTabNavigator";
import MusicScreen from "./screens/MusicScreen";
import PlaylistScreen from "./screens/PlaylistScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

import TopTabNavigator from "./routes/TopTabNavigator";
import ChatScreen from "./screens/ChatScreen";
import CallScreen from "./screens/CallScreen";
import ContactScreen from "./screens/ContactScreen";

import DrawerNavigator from "./routes/DrawerNavigator";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";




function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>


        {/* <StackNavigator/> */}
        {/* <BottomTabNavigator/> */}
        {/* <TopTabNavigator/> */}
        <DrawerNavigator/>
        


      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;