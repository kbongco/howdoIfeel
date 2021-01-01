import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [addaNew, setAddaNew] = useState('false')

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What's on your mind? How are you feeling?</Text>
      <Button title='Add a new Entry!'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100,
  },
  
  question: {
    fontSize: 24
  }

});
