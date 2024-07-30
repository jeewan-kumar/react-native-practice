// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from './screens/Home';
// import Details from './screens/Details';

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Home'>
//         <Stack.Screen
//           name='Home'
//           component={Home}
//           options={{
//             title: "Trending Products"
//           }}
//         />
//         <Stack.Screen
//           name='Details'
//           component={Details}
//           options={{
//             title: "Product Details"
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;


import React from 'react';
import { StyleSheet, View } from 'react-native';
import Onboarding from './src/screens/Onboarding';

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});