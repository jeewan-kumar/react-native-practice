import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CourseScreen from './screens/CourseScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Course" component={CourseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
