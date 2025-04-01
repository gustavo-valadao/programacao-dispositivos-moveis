import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ContactScreen from "./screens/ContactScreen";
import TaskScreen from "./screens/TaskScreen";

function App() {
  return (
    <SafeAreaProvider>
        <TaskScreen/>
    </SafeAreaProvider>
  )
}

export default App;
