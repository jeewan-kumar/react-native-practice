import React from 'react';
import { Text, View, StyleSheet, Linking, Button } from 'react-native';

const Video = ({ video }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{video.title}</Text>
      <Text style={styles.duration}>Duration: {video.duration}</Text>
      <Button
        title="Watch Video"
        onPress={() => Linking.openURL(video.url)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  duration: {
    fontSize: 14,
    marginBottom: 8,
  },
});

export default Video;
