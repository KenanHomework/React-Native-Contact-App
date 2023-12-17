import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Contacts from "./screens/Contacts";
import Recents from "./screens/Recents";
import Keyboard from "./screens/Keyboard";
import TabBar from "./components/TabBar";
import Search from "./screens/Search";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      initialRouteName="Contacts"
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Keyboard" component={Keyboard} />
      <Tab.Screen name="Recents" component={Recents} />
      <Tab.Screen name="Contacts" component={Contacts} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tab_Nav"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Tab_Nav" component={TabNav} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
