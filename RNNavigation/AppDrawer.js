import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import DashboardScreen from "./screens/DashboardScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "My Dashboard",
            drawerLabel: "Dashboard Label",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
              backgroundColor: "#c6cbef",
            },
          }}
        />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
