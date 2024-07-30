import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Pop = () => {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      {show ? (
        <View style={styles.module}>
          <View style={styles.body}>
            <Text style={styles.text}>Hello World!</Text>
            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      ) : null}

      <View style={styles.openBtnContainer}>
        <Button title="Open Dialog" onPress={() => setShow(true)} />
      </View>
    </View>
  );
};

export default Pop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  openBtnContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  body: {
    backgroundColor: '#fff',
    height: 200,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  module: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
    fontSize: 16,
  },
});
