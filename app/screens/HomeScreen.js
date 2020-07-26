import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, Image} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import App from '../../App';

function DashboardScreen(){
    return(
        <View style={styles.container}>
            <Text>DashboardScreen</Text>
        </View>
    );
}

function ProfileScreen(){
    return(
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return(
        <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Dashboard" component={DashboardScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : "center",
        justifyContent : 'center'
    },
})