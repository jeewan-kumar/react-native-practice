import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Video from './Video';

const Lesson = ({ lesson }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lesson.title}</Text>
      <Text style={styles.description}>{lesson.description}</Text>
      {lesson.videos.map(video => (
        <Video key={video.id} video={video} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default Lesson;
