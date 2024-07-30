// OnboardingScreen3.js
import React from 'react';
import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const OnboardingScreen3 = () => {
  return (
    <View style={[styles.container, { width }]}>
      <Image source={require('../img/onbod_03.png')} style={styles.image} />
      <Text style={styles.text}>Get Started Now!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightcoral',
  },
//   image: {
//     width: 200,
//     height: 200,
//    // marginBottom: 20,
//   },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:10,
  },
});

export default OnboardingScreen3;
