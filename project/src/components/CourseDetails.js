import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CourseDetails = ({ courseData }) => {
  const renderLessonItem = ({ item }) => (
    <View style={styles.lessonItem}>
      <Text style={styles.lessonTitle}>{item.title}</Text>
      <Text style={styles.lessonDescription}>{item.description}</Text>
      <FlatList
        data={item.videos}
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
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courseData.title}</Text>
      <Text style={styles.description}>{courseData.description}</Text>
      <FlatList
        data={courseData.lessons}
        keyExtractor={(lesson) => lesson.id.toString()}
        renderItem={renderLessonItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 20,
  },
  lessonItem: {
    marginBottom: 20,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lessonDescription: {
    marginBottom: 10,
  },
  videoItem: {
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default CourseDetails;
