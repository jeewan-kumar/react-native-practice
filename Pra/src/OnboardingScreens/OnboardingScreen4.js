// OnboardingScreen1.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const OnboardingScreen4 = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={require('../img/onbod_04.png')} style={styles.image} /> */}
      <Text style={styles.text}>Skillup Coding </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen4;
