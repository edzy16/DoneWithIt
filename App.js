import React from "react";
import { StyleSheet, SafeAreaView, Button, StatusBar, Platform } from "react-native";

var east = 1;

export default function App() {
  return (
    <SafeAreaView style={[styles.container, containerStyle]} >
      <Button title="Click Me" onPress={console.log(east+1)} />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "pink" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  }
});
