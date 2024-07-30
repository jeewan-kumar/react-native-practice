// import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import TextButtonView from './src/day_1/TextButtonView'
// import OnPressButton from './src/day_1/OnPressButton'
// import StateInRN from './src/day_1/StateInRN'
// import PropsRN from './src/day_1/PropsRN'
// import TextInput from './src/day_1/TextInput'
// import SimpleForm from './src/day_1/SimpleForm'
// import ListFlatList from './src/day_1/ListFlatList'
// import ListWithMap from './src/day_1/ListWithMap'
// import GridMake from './src/day_1/GridMake'



// const App = () => {
//   return (
//     <View>
//       <SafeAreaView>
//         <ScrollView>
//           {/* <TextButtonView />
//           <OnPressButton />
//           <StateInRN />
//           <PropsRN />
//           <TextInput />
//           <SimpleForm/> */}
//           {/* <ListFlatList/>
//           <ListWithMap/> */}
//           <GridMake/>
//         </ScrollView>
//       </SafeAreaView>


//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import { StyleSheet, Text, View } from 'react-native'
import Navigation from './src/Day_2_Navigation'
import Day_2_Navigation from './src/Day_2_Navigation'
import Day_3_Navigation from './src/Day_3_Navigation'
const App = () => {
  return (
    // <Navigation/>
    // <Day_2_Navigation/>
    <Day_3_Navigation/>
  )
}
export default App
const styles = StyleSheet.create({})


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { AppRegistry } from 'react-native';
// import HomeScreen from './src/day_2/screens/HomeScreen';
// import Pop from './src/day_2/screens/Pop';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Pop" component={Pop} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
// AppRegistry.registerComponent('NativePra', () => App);
