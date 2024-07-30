// LogoutScreen.js

import React, { useContext } from 'react';
import { View, Button, Alert } from 'react-native';
import AuthContext from './AuthContext'; // Import AuthContext

const LogoutScreen = ({ navigation }) => {
    const { token, logout } = useContext(AuthContext); // Use token and logout function from AuthContext

    const handleLogout = () => {
        const apiUrl = 'http://your-api-domain.com/logout'; // Replace with your actual logout API endpoint

        const requestBody = {
            eventID: '1002',
            addInfo: {
                token: token
            }
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
        .then(response => response.json())
        .then(data => {
            // Assuming your API returns success or failure response
            if (data.rStatus === 0 && data.rData && data.rData.rCode === 0) {
                // Logout successful, clear local authentication state
                logout();
                // Navigate to LoginScreen or any other screen
                navigation.navigate('Login');
            } else {
                // Handle logout failure
                Alert.alert('Logout Failed', data.rData.rMessage || 'Unknown error occurred');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred while trying to logout. Please try again.');
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default LogoutScreen;
