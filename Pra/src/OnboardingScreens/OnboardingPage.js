// OnboardingPage.js
import React, { useState, useRef } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import OnboardingScreen1 from './OnboardingScreen1';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';

const { width } = Dimensions.get('window');

const OnboardingPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef();

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(scrollPosition / width);
    setCurrentPage(pageIndex);
  };

  const scrollToPage = (pageIndex) => {
    scrollViewRef.current.scrollTo({ x: pageIndex * width, animated: true });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <OnboardingScreen1 />
        <OnboardingScreen2 />
        <OnboardingScreen3 />
      </ScrollView>
      <View style={styles.pagination}>
        <TouchableOpacity
          style={[styles.dot, currentPage === 0 && styles.activeDot]}
          onPress={() => scrollToPage(0)}
        />
        <TouchableOpacity
          style={[styles.dot, currentPage === 1 && styles.activeDot]}
          onPress={() => scrollToPage(1)}
        />
        <TouchableOpacity
          style={[styles.dot, currentPage === 2 && styles.activeDot]}
          onPress={() => scrollToPage(2)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default OnboardingPage;
