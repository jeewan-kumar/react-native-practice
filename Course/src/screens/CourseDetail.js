// src/screens/CourseDetail.js

import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { getCourseById } from '../services/api';

const CourseDetail = ({ route }) => {
  const { courseId } = route.params;
  const course = getCourseById(courseId);

  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.description}</Text>
      <FlatList
        data={course.lessons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CourseDetail;
