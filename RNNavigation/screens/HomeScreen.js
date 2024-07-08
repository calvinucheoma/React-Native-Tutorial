import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({
  /*navigation,*/
  route,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to About Page"
        onPress={() =>
          navigation.navigate("About", {
            name: "Chuks",
          })
        }
      />
      <Text style={styles.text}>{route.params?.result}</Text>
    </View>
  );
};

export default HomeScreen;

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
