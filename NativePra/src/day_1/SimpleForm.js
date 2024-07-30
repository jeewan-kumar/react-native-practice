import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);

  const printDetails = () => {
    setDisplay(true);
  };

  const clearDetails = () => {
    setName("");
    setEmail("");
    setPassword("");
    setDisplay(false);
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title='Print Details' onPress={printDetails} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Clear Details' onPress={clearDetails} />
      </View>
      {display && (
        <View style={styles.detailsContainer}>
          <Text>Your Name is: {name}</Text>
          <Text>Your Email is: {email}</Text>
          <Text>Your Password is: {password}</Text>
        </View>
      )}
    </View>
  );
};

export default SimpleForm;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  textInput: {
    fontSize: 18,
    color: 'blue',
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    padding: 8,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  detailsContainer: {
    marginTop: 20,
  },
});
