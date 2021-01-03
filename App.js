import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AddMood from "./Screens/AddMood";
import Header from "./Components/Header";

export default function App() {
  const [addaNew, setAddaNew] = useState("false");

  const clickToGo = () => {
    console.log("It works!");
  };

  return (
    <View>
      <Header title='How are you feeling?'/>
      <View style={styles.container}>
        <Text style={styles.question}>
          What's on your mind? How are you feeling?
        </Text>
        <TouchableOpacity
          style={styles.adding}
          title="Add a new Entry!"
          onPress={clickToGo}
        >
          <Text>Add an Entry</Text>
        </TouchableOpacity>
        <AddMood />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },

  question: {
    fontSize: 24,
    marginVertical: 50,
  },
  adding: {
    marginTop: 20,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "rgb(7,134,251)",
  },
});
