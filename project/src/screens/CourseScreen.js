import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Alert, Button } from 'react-native';

const CourseScreen = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('https://api.example.com/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleEnroll = (courseId) => {
    // Implement functionality to enroll in the course
    Alert.alert(
      'Enroll',
      `Are you sure you want to enroll in the course with ID ${courseId}?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Enroll',
          onPress: () => {
            // Perform enrollment action here
            Alert.alert('Enrollment Successful', `You are now enrolled in the course with ID ${courseId}`);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
      <Text>Popularity: {item.popularity}</Text>
      <Text>Enrolled: {item.enrolled ? 'Yes' : 'No'}</Text>
      <Text style={styles.details}>Details: {item.details}</Text>
      <Text style={styles.lessons}>Lessons:</Text>
      <FlatList
        data={item.lessons}
        keyExtractor={(lesson) => lesson.id.toString()}
        renderItem={({ item: lesson }) => (
          <View style={styles.lessonItem}>
            <Text style={styles.lessonTitle}>{lesson.title}</Text>
            <Text>{lesson.description}</Text>
            <FlatList
              data={lesson.videos}
              keyExtractor={(video) => video.id.toString()}
              renderItem={({ item: video }) => (
                <View style={styles.videoItem}>
                  <Text>{video.title}</Text>
                  <Text>URL: {video.url}</Text>
                  <Text>Duration: {video.duration}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
      <Button title="Enroll" onPress={() => handleEnroll(item.id)} />
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={(course) => course.id.toString()}
        renderItem={renderCourseItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseItem: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseDescription: {
    marginBottom: 10,
  },
  details: {
    marginBottom: 10,
  },
  lessons: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lessonItem: {
    marginBottom: 20,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  videoItem: {
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default CourseScreen;
