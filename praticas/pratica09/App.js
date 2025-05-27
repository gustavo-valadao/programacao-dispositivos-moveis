import { SafeAreaProvider } from "react-native-safe-area-context";
import { StoreProvider } from "./contexts/StoreContext";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./routes/MainNavigator";



function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;