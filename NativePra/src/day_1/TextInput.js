import { StyleSheet, Text, View, TextInput as RNTextInput, Button } from 'react-native';
import React, { useState } from 'react';

const CustomTextInput = () => {
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>
      <Text>Handle Text Input</Text>
      <Text>Your Name is: {name}</Text>
      <RNTextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title='clean input value' onPress={()=>setName('')}/>
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginTop: 10,
  },
});
