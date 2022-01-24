import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Text, TextInput, } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [total, setTotal] = useState('');

function calculateAdd() {
  setTotal(parseInt(number1) + parseInt(number2));
}
function calculateSubtr() {
  setTotal(parseInt(number1) - parseInt(number2));
}

  return (
    <View style={styles.container}>
  
  <Text>Result: {total} </Text>
    <TextInput keyboardType="numeric" style={styles.input} value={number1} onChangeText={number1 => setNumber1(number1)}/>
    <TextInput keyboardType="numeric" style={styles.input} value={number2} onChangeText={number2 => setNumber2(number2)} />
  
      <StatusBar style="auto" />

      <View style={{ flexDirection: "row" }}>
      <Button
        title="+"
        onPress={calculateAdd}
      />
      <Button
        title="-"
        onPress={calculateSubtr}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input : {
    width:200  , 
    borderColor: 'pink', 
    borderWidth: 3
  }
});