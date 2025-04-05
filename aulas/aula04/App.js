import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "./screens/LoginScreen";
import ContactScreen from "./screens/ContactScreen";
import TaskScreen from "./screens/TaskScreen";
import TaskScreenGlobal from "./screens/TaskScreenGlobal";
import { TaskProvider } from "./contexts/TaskContext";
import { TaskContext } from "./contexts/TaskContext";

function App() {
  return (
    <SafeAreaProvider>
      <TaskProvider>
        <TaskScreen/>
      </TaskProvider>
    </SafeAreaProvider>
  )
}

export default App;
