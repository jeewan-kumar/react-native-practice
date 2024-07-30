import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

const DiceOne = require('./assets/img/One.png');
const DiceTwo = require('./assets/img/Two.png');
const DiceThree = require('./assets/img/Three.png');
const DiceFour = require('./assets/img/Four.png');
const DiceFive = require('./assets/img/Five.png');
const DiceSix = require('./assets/img/Six.png');

const Dice = (props) => {
  console.log("Image URL:", props.imageUrl); // Log the image URL for debugging
  return (
    <View style={styles.diceContainer}>
      <Image source={props.imageUrl} style={styles.diceImage} />
    </View>
  )
}

const App = () => {
  const [diceImage, setDiceImage] = useState(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
