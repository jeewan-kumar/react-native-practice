

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UsingApi = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    try {
      const response = await fetch('http://192.168.33.157:5164/skillup_UserSignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventID: "1005",
          addInfo: {
            skillup_id: 1
          }
        }),
      });
      const jsonResponse = await response.json();
      console.log('API Response:', jsonResponse);
      if (jsonResponse.rStatus === 0) {
        const user = jsonResponse.rData.lessons[0][0];
        setUserData({
          skillup_id: user[0],
          email: user[1],
          phone_number: user[2],
          password: user[3],
        });
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
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
      <Text>Email: {userData.email}</Text>
      <Text>Phone Number: {userData.phone_number}</Text>
      <Text>Password: {userData.password}</Text>
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
});

export default UsingApi;
