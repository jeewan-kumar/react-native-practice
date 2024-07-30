// import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
// import Pop from './day_2/Pop'
// const Navigation = () => {
//   return (
//     <Pop/>
//   )
// }
// export default Navigation
// const styles = StyleSheet.create({})

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './day_2/screens/HomeScreen';
import Pop from './day_2/screens/Pop';

const Stack = createNativeStackNavigator();
const Day_2_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Pop' component={Pop} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default Day_2_Navigation
const styles = StyleSheet.create({})