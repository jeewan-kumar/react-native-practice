import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import MapView, { Marker } from 'react-native-maps';

const onboardingData = [
  {
    title: 'Welcome to My App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    //image: require('./assets/onboarding1.jpg'),
  },
  {
    title: 'Discover Nearby Places',
    description: 'Explore restaurants, parks, and attractions near you.',
    mapCoordinates: { latitude: 37.78825, longitude: -122.4324 },
  },
  {
    title: 'Get Started',
    description: 'Sign up to unlock exclusive features and personalized recommendations.',
    //image: require('./assets/onboarding3.jpg'),
  },
];

const OnboardingScreen = ({ title, description, image, mapCoordinates, onSkip, onNext }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {image && <Image source={image} style={styles.image} />}
      {mapCoordinates && (
        <MapView style={styles.map} initialRegion={{
          ...mapCoordinates,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker coordinate={mapCoordinates} />
        </MapView>
      )}
      <Text style={styles.description}>{description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSkip} style={styles.button}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Onboarding = () => {
  const swiperRef = React.useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
    }
  };

  return (
    <Swiper style={styles.wrapper} showsButtons={false} loop={false} ref={swiperRef}>
      {onboardingData.map((item, index) => (
        <OnboardingScreen
          key={index}
          title={item.title}
          description={item.description}
          image={item.image}
          mapCoordinates={item.mapCoordinates}
          onSkip={() => {
            // Handle skip logic, e.g., navigate to the main app
          }}
          onNext={handleNext}
        />
      ))}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  map: {
    width: '80%',
    height: 200,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default Onboarding;
