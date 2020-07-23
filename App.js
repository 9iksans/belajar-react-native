import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback}  from 'react-native';

export default function App() {
  console.log("App Executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text onPress ={ ()=> console.log("text press") } >
        Hello my Current Apps
      </Text>

      <TouchableWithoutFeedback onPress={()=> console.log("image pressed")}>
      <Image 
        source={{
            width:300,
            height: 300,
            uri : 'https://www.kaorinusantara.or.id/wp-content/uploads/2019/06/tz8.jpg',
            }}
      />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',

  },
});
