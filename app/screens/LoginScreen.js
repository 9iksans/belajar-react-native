import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.imageLogo}
      ></Image>
      <SafeAreaView style={styles.container}>
        <TextInput style={styles.username} placeholder="Username" />
        <TextInput style={styles.username} placeholder="Password" />
      </SafeAreaView>

      <View style={styles.loginButton}>
        <Text
          onPress={() => navigation.navigate("Home")}
          style={styles.navText}
        >
          LOGIN
        </Text>
      </View>

      <View style={styles.backButton}>
        <Text
          onPress={() => navigation.navigate("WelcomeScreen")}
          style={styles.navText}
        >
          CANCEL
        </Text>
      </View>
    </ImageBackground>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  username: {
    borderWidth: 1,
    borderColor: "#4ecdc4",
    height: 80,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "white",
    fontSize: 30,
    padding: 20,
    marginTop: 30,
    justifyContent: "center",
  },
  imageLogo: {
    width: 100,
    height: 100,
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
  backButton: {
    width: "100%",
    height: 100,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 100,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "white",
    fontSize: 30,
  },
});
