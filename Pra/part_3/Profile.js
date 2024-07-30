import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://192.168.33.157:5164/skillup_UserProfile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventID: "1006",
          addInfo: {
            skillup_id: 1
          }
        }),
      });
      const jsonResponse = await response.json();
      console.log('API Response:', jsonResponse);
      
      if (jsonResponse.rStatus === 0 && jsonResponse.rData && jsonResponse.rData.profile) {
        const userArray = jsonResponse.rData.profile[0];
        console.log('User Array:', userArray);
        
        if (userArray && userArray.length > 0) {
          const user = {
            profile_picture: userArray[0],
            first_name: userArray[1],
            last_name: userArray[2],
            date_of_birth: userArray[3],
            bio: userArray[4],
            email: userArray[5],
            phone_number: userArray[6],
            name: userArray[7]
          };
          console.log('User Data:', user);
          
          setUserData(user);
        } else {
          console.error('No user data found in profile array');
        }
      } else {
        console.error('Invalid response structure or rStatus is not 0');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user profile:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!userData) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {userData.profile_picture && (
        <Image
          source={{ uri: `data:image/jpeg;base64,${userData.profile_picture}` }}
          style={styles.image}
        />
      )}
      <Text>Name: {userData.name}</Text>
      <Text>Email: {userData.email}</Text>
      <Text>Phone Number: {userData.phone_number}</Text>
      <Text>Date of Birth: {userData.date_of_birth}</Text>
      <Text>Bio: {userData.bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Profile;
