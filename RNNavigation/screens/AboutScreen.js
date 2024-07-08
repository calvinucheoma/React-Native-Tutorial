import { useLayoutEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AboutScreen = ({ navigation, route }) => {
  const { name } = route.params;

  // We can also use this method to dynamically set Stack navigator options
  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About {name}</Text>
      <Button
        title="Update the name"
        onPress={() => navigation.setParams({ name: "Don Chukaaa" })}
      />
      {/* <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate("Home")}
      /> */}
      <Button
        title="Go back with data"
        onPress={() =>
          navigation.navigate("Home", { result: "Data from About Page" })
        }
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
