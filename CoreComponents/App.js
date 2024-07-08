import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState } from "react";
import image from "./assets/adaptive-icon.png";
import Greet from "./components/Greet";

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "pink",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        padding: 40,
      }}
    >
      <ScrollView>
        <ImageBackground source={image} style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "700" }}>
            App
          </Text>
          <Image source={image} style={{ width: 100, height: 100 }} />
          <Pressable onPress={() => alert("Image pressed!")}>
            <Image
              source={{ uri: "https://picsum.photos/200" }}
              style={{ width: 300, height: 300 }}
            />
          </Pressable>
        </ImageBackground>
        <Text style={{ marginBottom: 20 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, cumque
          accusantium similique optio id voluptates harum expedita maxime! Omnis
          aperiam quas, sit ullam nesciunt quasi iste laborum ea nemo ratione?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          dignissimos minus eos asperiores tenetur quisquam sunt facilis omnis
          voluptatibus corrupti, ex hic repellat vero, provident tempora sed,
          architecto eveniet voluptatum! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Mollitia excepturi asperiores ipsam animi labore
          similique minima rerum ullam, velit neque tempore culpa. Accusamus
          consequatur consectetur amet provident, incidunt sapiente alias? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Cum, a vero
          suscipit repellat libero nobis praesentium soluta fugit adipisci
          commodi nemo ea! Totam, dolores ducimus harum adipisci ipsum magni
          quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Delectus deserunt dolorem eius obcaecati error saepe nihil provident
          nemo. Vero aliquam voluptatibus dignissimos nobis ex consequuntur
          similique reprehenderit esse et sit? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Amet, vel cupiditate? Omnis animi,
          perspiciatis pariatur saepe quidem fugit excepturi. Tempore
          exercitationem eius rerum aliquid vel corrupti hic, unde quos saepe!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          aliquam. Temporibus incidunt cumque dolores, officiis natus animi
          repudiandae reprehenderit, veniam omnis dolorum, optio quidem repellat
          vero perspiciatis recusandae ipsum mollitia? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quibusdam doloribus maiores culpa,
          ullam consequuntur itaque reprehenderit nihil enim voluptates. Ut,
          eveniet adipisci totam voluptatem praesentium eum dolorum inventore?
          Quam, mollitia! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae dolor corrupti deserunt numquam quos? Sit ullam ipsa
          unde quod recusandae beatae quo aspernatur, saepe minus repellendus
          earum excepturi et veniam.
        </Text>
        <Button
          title="Click Me!"
          onPress={() => {
            // console.log("Button clicked!");
            // alert("You just clicked me!");
            setIsModalVisible(true);
          }}
          color="plum"
          // disabled
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide" // set to 'none' by default but has 'fade' and 'slide' values
          presentationStyle="formSheet" // set to 'fullScreen' by default. only affects ios and not android
        >
          <View style={{ flex: 1, backgroundColor: "yellow", padding: 60 }}>
            <Text style={{ color: "white", fontSize: 30, marginBottom: 20 }}>
              Modal has been clicked and is now open
            </Text>
            <Button
              title="Close Modal"
              color="cyan"
              onPress={() => setIsModalVisible(false)}
            />
          </View>
        </Modal>
        <StatusBar backgroundColor="lightgreen" barStyle="default" hidden />
        <ActivityIndicator size="large" color="red" animating={false} />
        <Button
          title="Alert1"
          onPress={() => Alert.alert("Invalid data!")}
          color="red"
        />
        <Button
          title="Alert2"
          onPress={() => Alert.alert("Invalid data!", "Username is incorrect!")}
          color="green"
        />
        <Button
          title="Alert3"
          onPress={() =>
            Alert.alert("Invalid data!", "Username is incorrect!", [
              { text: "Cancel", onPress: () => console.log("Cancel pressed") },
              { text: "OK", onPress: () => console.log("OK pressed") },
            ])
          }
          color="orange"
        />

        {/* CUSTOM COMPONENT */}
        <Greet name="Chuka Diogs" />
        <Greet name="John Bull" />
      </ScrollView>
    </View>
  );
};

export default App;
