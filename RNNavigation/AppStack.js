import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable, StyleSheet, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createNativeStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6a51ae",
        },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
        headerRight: () => (
          <Pressable onPress={() => alert("Menu button pressed!")}>
            <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
          </Pressable>
        ),
        // headerLeft: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
        // contentStyle: {
        //   backgroundColor: "#e8e4f3",
        // },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Welcome Home",
        }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        initialParams={{ name: "Guest" }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
      {/* <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#6a51ae",
          },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
          headerRight: () => (
            <Pressable onPress={() => alert("Menu button pressed!")}>
              <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
            </Pressable>
          ),
          headerLeft: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
          contentStyle: {
            backgroundColor: "#e8e4f3",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Welcome Home",
            // headerStyle: {
            //   backgroundColor: "#6a51ae",
            // },
            // headerTintColor: "#fff",
            // headerTitleStyle: { fontWeight: "bold" },
            // headerRight: () => (
            //   <Pressable onPress={() => alert("Menu button pressed!")}>
            //     <Text style={{ color: "white", fontSize: 16 }}>Menu</Text>
            //   </Pressable>
            // ),
            // headerLeft: () => <Text style={{ fontSize: 20 }}>🏠</Text>,
            // contentStyle: {
            //   backgroundColor: "#e8e4f3",
            // },
          }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          initialParams={{ name: "Guest" }}
          // options={({ route }) => ({
          //   title: route.params.name,
          // })}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
