// SlidingPage.js
import React from 'react';
import { ScrollView, View, StyleSheet, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

const SlidingPage = () => {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
    >
      <View style={[styles.page, { backgroundColor: 'skyblue' }]}>
        <Text style={styles.text}>Page 1</Text>
      </View>
      <View style={[styles.page, { backgroundColor: 'lightgreen' }]}>
        <Text style={styles.text}>Page 2</Text>
      </View>
      <View style={[styles.page, { backgroundColor: 'lightcoral' }]}>
        <Text style={styles.text}>Page 3</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  page: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SlidingPage;
