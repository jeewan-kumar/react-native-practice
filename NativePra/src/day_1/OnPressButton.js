import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnPressButton = () => {
    const fruit = () => {
        console.warn("Function called")
    }
    const fun = (val) => {
        console.warn(val)
    }
  return (
    <View>
      <Text>OnPressButton</Text>
      <Button title='On Press' onPress={fruit}/>
      <Button title='On Press' onPress={(val)=>fun("Jeewan")}/>
    </View>
  )
}

export default OnPressButton

const styles = StyleSheet.create({})