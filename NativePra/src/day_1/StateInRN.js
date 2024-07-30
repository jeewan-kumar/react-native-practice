import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const StateInRN = () => {
    const [name,setname]=useState("jeewan");

    function testName(){
        setname("Jeewan Kumar");
    }
  return (
    <View>
      <Text>State in react native</Text>
      <Text>{name}</Text>
      <Button title='update Name' onPress={testName}/>
    </View>
  )
}

export default StateInRN

const styles = StyleSheet.create({})