import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box
        style={{
          backgroundColor: "#8e9b00",
          //alignSelf: "flex-start" /*paddingVertical: 100*/ /*flex: 1*/,
          flexShrink: 1,
          top: 75,
          left: 75,
        }}
      >
        Box 1 Shrink
      </Box>
      <Box
        style={{
          backgroundColor: "#b65d1f",
          //alignSelf: "flex-end" /*flex: 3*/,
          flexShrink: 1,
        }}
      >
        Box 2 Shrink
      </Box>
      <Box
        style={{
          backgroundColor: "#1c4c56",
          // alignSelf: "center",
          // flexBasis: 140,
        }}
      >
        Box 3
      </Box>
      <Box
        style={{
          backgroundColor: "#ab9156" /*alignSelf: "stretch"*/,
          position: "absolute",
          top: 100,
          left: 100,
        }}
      >
        Box 4
      </Box>
      <Box
        style={{
          backgroundColor: "#6b0803" /*alignSelf: "baseline"*/,
          // flexGrow: 1,
        }}
      >
        Box 5
      </Box>
      <Box
        style={{
          backgroundColor: "#1c4c56" /*alignSelf: "auto"*/,
          // flexGrow: 3,
        }}
      >
        Box 6
      </Box>
      <Box style={{ backgroundColor: "#b95f21" }}>Box 7</Box>
    </View>
    // <View style={{ backgroundColor: "plum", flex: 1 }}></View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    //height: 300,
    //flexWrap: "wrap",
    //gap: 30, //specifies the gap for both rows and columns
    // rowGap: 20,
    // columnGap: 30,
    // alignContent: "center",
    flex: 1,
    // flexDirection: "row",
    // alignItems: "flex-start",
    // width: 300,
    // justifyContent: "space-between",
    // alignItems: "baseline",
  },
});
