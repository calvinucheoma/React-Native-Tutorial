import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CourseListScreen from "./screens/CourseListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          //   tabBarLabelPosition: "beside-icon",
          //   tabBarShowLabel: false,
          tabBarActiveTintColor: "purple",
          //   tabBarInactiveTintColor:''
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
