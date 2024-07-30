import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const PropsRN = () => {
    //let name = "jeewa";
    const [user,setname] = useState({name: "Bruce",age: 25})
  return (
    <View>
      <Text>Props in react native</Text>
      <Button title='Update Props' onPress={()=>setname({name:"jeewan",age:30})}/>
      <User name={user.name} age={user.age}/>
    </View>
  )
}

const User =(props)=>{
    return (
        <View>  
            <Text>{props.name}</Text>
            <Text>{props.age}</Text>
        </View>
    )
}
export default PropsRN

const styles = StyleSheet.create({})