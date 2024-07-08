import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          Style Inheritance <Text style={styles.boldText}>Bold Text</Text>
        </Text>
      </View>
      <View style={[styles.lightblueBg, styles.box, styles.boxShadow]}>
        <Text>Lightblue Box</Text>
      </View>
      <View style={[styles.lightgreenBg, styles.box, styles.androidShadow]}>
        <Text>Lightgreen box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  darkMode: { backgroundColor: "black", color: "white" },
  // child elements do not inherit styles of parent elements so setting the font color to white in the <View> container would not change the text color to white
  darkModeText: { color: "white" },
  boldText: { fontWeight: "bold" },
  // React native still supports style inheritance within <Text> subtrees so the styles are inherited.
  box: {
    width: "35%",
    height: "35%",
    // padding:30,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "purple",
    // borderStyle: 'solid' // set to solid by default so we don't have to mention it
  },
  lightblueBg: {
    backgroundColor: "lightblue",
  },
  lightgreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333333", // 'shadowColor' is the only property that works on both ios and android.
    shadowOffset: {
      width: 6, //can be a positive or negative value
      height: 6, //can be a positive or negative value
    },
    shadowOpacity: 0.6, //0 represents complete transparency and 1 represents complete opacity
    shadowRadius: 4, // a larger number value creates a larger and lighter blur, making the shadow more prominent.
  }, // shadow styles apply to only ios devices
  androidShadow: {
    elevation: 5,
  },
});
