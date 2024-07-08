import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};

    if (!username) {
      errors.username = "Username is required";
    }

    if (!password) {
      errors.password = "Password is required";
    }

    setErrors(errors);

    // console.log(Object.keys(errors));
    // console.log(Object.keys(errors).length);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Submitted", username, password);
      setUsername("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={styles.form}>
        <Image
          source={require("../assets/diary image.jpg")}
          style={styles.image}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        {errors.username ? (
          <Text style={styles.errorText}>{errors.username}</Text>
        ) : null}
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        {errors.password ? (
          <Text style={styles.errorText}>{errors.password}</Text>
        ) : null}
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: "100%",
    height: 400,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
