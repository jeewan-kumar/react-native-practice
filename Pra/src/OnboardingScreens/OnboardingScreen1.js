// OnboardingScreen1.js
import React from 'react';
import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


const OnboardingScreen1 = () => {
  return (
    <View style={[styles.container,{width}]}>
      <Image source={require('../img/onbod_01.png')} style={styles.image} />
      <Text style={styles.text}>Welcome to Our App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue',
  },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 20,
//   },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen1;
