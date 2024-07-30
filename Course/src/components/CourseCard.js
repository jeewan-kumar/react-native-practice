import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { fetchCourseData } from './services/api';
import Lesson from './Lesson';

const CourseCard = () => {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCourseData();
        setCourse(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  if (!course) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.description}>{course.description}</Text>
        <Text style={styles.details}>{course.details}</Text>
        <Text style={styles.popularity}>Popularity: {course.popularity}</Text>
        {course.lessons.map(lesson => (
          <Lesson key={lesson.id} lesson={lesson} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    marginBottom: 4,
  },
  popularity: {
    fontSize: 14,
    marginBottom: 16,
  },
});

export default CourseCard;
