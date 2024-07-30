import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [randomBackground, setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, { backgroundColor: randomBackground }]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}> Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: "#641B4D",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
    textTransform: "uppercase",
  }
})

// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import BgChanger from './bgChanger/BgChanger'

// const App = () => {
//   return (
//     <SafeAreaView>
//       <View>
//         <BgChanger />
//       </View>
//     </SafeAreaView>

//   )
// }

// export default App

// const styles = StyleSheet.create({})