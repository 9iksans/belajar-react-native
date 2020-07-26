import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <Image
        source={require("../assets/logo-red.png")}
        style={styles.imageLogo}
      ></Image>
      <View style={styles.loginButton}>
        <Text
          onPress={() => navigation.navigate("Login")}
          style={styles.loginText}
        >
          LOGIN
        </Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.loginText}>REGISTER</Text>
      </View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 100,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 100,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: "white",
    fontSize: 30,
  },
  imageLogo: {
    width: 100,
    height: 100,
    alignItems: "center",
    position: "absolute",
    top: 100,
  },
});
