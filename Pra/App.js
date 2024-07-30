/* Navigation */
// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './Navigation/HomeScreen';
// import DetailsScreen from './Navigation/DetailsScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" component={DetailsScreen} />
//       </Stack.Navigator>    
//     </NavigationContainer>
//   );
// };

// export default App;

/* OnBoardingPage */

// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import OnboardingPage from './OnBoardingPage/OnboardingPage';

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(0);

//   const handleNext = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const pages = [
//     {
//       image: require('./img/onbod_01.png'),
//       title: 'Welcome to Onboarding Page 1',
//       // description: 'This is the first page of the onboarding.',
//     },
//     {
//       image: require('./img/onbod_02.png'),
//       title: 'Onboarding Page 2',
//       description: 'This is the second page of the onboarding.',
//     },
//     {
//       image: require('./img/onbod_03.png'),
//       title: 'Onboarding Page 3',
//       description: 'This is the third page of the onboarding.',
//     },
//     {
//       image: require('./img/onbod_04.png'),
//       title: 'Onboarding Page 4',
//       description: 'This is the fourth page of the onboarding.',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <OnboardingPage
//         image={pages[currentPage].image}
//         title={pages[currentPage].title}
//         description={pages[currentPage].description}
//         onPress={handleNext}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;

/* SlidingPage */

// import React from 'react';
// import SlidingPage from './src/SlidingPage/SlidingPage';

// const App = () => {
//   return (
//     <SlidingPage />
//   );
// };

// export default App;

/*OnboardingScreen*/


// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import OnboardingPage from './src/OnboardingScreens/OnboardingPage';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <OnboardingPage />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default App;


/* prac 1*/

// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { ScrollView, StyleSheet, Text, View } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import FlatCard from './prac1/FlatCard';
// import ElevatedCard from './prac1/ElevatedCard';
// import TrendingPlaces from './prac1/TrendingPlaces';
// import ActionCard from './prac1/ActionCard';
// import ContactList from './prac1/ContactList';

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaView style={{ flex: 1 }}>
//         <ScrollView>
//           <FlatCard />
//           <ElevatedCard />
//           <TrendingPlaces />
//           <ActionCard />
//           <ContactList />
//         </ScrollView>
//       </SafeAreaView>
//     </GestureHandlerRootView>
//   );
// }

// export default App;

// const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UsingList from './part_3/UsingList'
import ArrayList from './part_3/ArrayList'
import UsingApi from './part_3/UsingApi'
import Profile from './part_3/Profile'
import Nav_Part_4 from './part_4/Nav_Part_4'

const App = () => {
  return (
    // <UsingList/>
    // <ArrayList/>
    // <UsingApi/>
    // <Profile/>
    <Nav_Part_4/>
  )
}

export default App

const styles = StyleSheet.create({})