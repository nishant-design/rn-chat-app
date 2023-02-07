import { createStackNavigator } from "@react-navigation/stack";
import AuthContextProvider from "./authContext";
import NavStack from "./NavStack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <NavStack />
    </AuthContextProvider>
  );
}
