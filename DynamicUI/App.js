// import { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  // Dimensions,
  // useWindowDimensions,
} from "react-native";
import CustomButton from "./components/CustomButton/CustomButton";

export default function App() {
  // const [dimensions, setDimensions] = useState({
  //   window: Dimensions.get("window"),
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener("change", ({ window }) => {
  //     setDimensions({ window });
  //   });
  //   return () => subscription?.remove();
  // });

  // const { window } = dimensions;
  // const windowWidth = window.width;
  // const windowHeight = window.height;

  // const windowWidth = useWindowDimensions().width;
  // const windowHeight = useWindowDimensions().height;

  return (
    // <View style={styles.container}>
    //   <View
    //     style={[
    //       styles.box,
    //       {
    //         width: windowWidth > 500 ? "70%" : "90%",
    //         height: windowHeight > 600 ? "60%" : "90%",
    //       },
    //     ]}
    //   >
    //     <Text style={{ fontSize: windowWidth > 500 ? 50 : 24 }}>Welcome</Text>
    //   </View>
    // </View>
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome</Text>
          <CustomButton
            title="Press Me"
            onPress={() => alert("Text Pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get("window").width;
// const windowHeight = Dimensions.get("window").height;

// console.log(windowHeight, windowWidth);

// The 'Dimensions' API has a drawback when as the style values don't update dynamically when the user switches
// the phone to landscape mode (when the window dimension changes).
// It won't even work at all because the 'orientation' property in our app.json file is set to 'portrait'.
// If we change this setting to 'default', the styles are adjusted for landscape mode, but the Dimension styles do
// not still adjust until we refresh the app.
// We can simplify this process using the useWindowsDimension() hook.

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "plum",
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    paddingTop: Platform.OS === "android" ? 25 : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 600 ? "60%" : "90%",
    // backgroundColor: "lightblue",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    ...Platform.select({
      ios: { color: "purple", fontSize: 24 },
      android: { color: "blue", fontSize: 30, fontStyle: "italic" },
    }),
  },
});
