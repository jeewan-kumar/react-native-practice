// src/screens/CourseList.js

import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getCourses } from '../services/api';

const CourseList = ({ navigation }) => {
  const courses = getCourses();

  return (
    <View>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CourseDetail', { courseId: item.id })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CourseList;
