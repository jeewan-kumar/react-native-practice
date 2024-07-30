import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CourseList from './src/screens/CourseList';
import CourseDetail from './src/screens/CourseDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CourseList">
        <Stack.Screen name="CourseList" component={CourseList} options={{ title: 'Courses' }} />
        <Stack.Screen name="CourseDetail" component={CourseDetail} options={{ title: 'Course Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
