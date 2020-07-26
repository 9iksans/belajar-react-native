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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text>DashboardScreen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
}

function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text>ActivityScreen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Activity"
        tabBarOptions={{
          style: {
            height: 100,
            paddingTop: 10,
          },
          labelStyle: {
            paddingBottom: 10,
          },
          activeTintColor: "#fc5c65",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabel: "Dashboard",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Activity"
          component={ActivityScreen}
          options={{
            tabBarLabel: "Activity",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="amazon-alexa"
                color={color}
                size={size}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabBarOptions: {
    width: 100,
    height: 200,
  },
});
