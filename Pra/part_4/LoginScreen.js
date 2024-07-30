// LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AuthContext from './AuthContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        const apiUrl = 'http://192.168.33.157:5164/skillup_UserSignIn';

        const requestBody = {
            eventID: '1001',
            addInfo: {
                email: email,
                password: password
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
            if (data.rStatus === 0 && data.rData && data.rData.rCode === 0) {
                // Login successful, navigate to OtherScreen and pass params
                navigation.navigate('OtherScreen', {
                    userId: data.rData.id,
                    token: data.rData.token
                });
            } else {
                // Login failed, show error message
                Alert.alert('Login Failed', data.rData.rMessage || 'Unknown error occurred');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Alert.alert('Error', 'An error occurred while trying to login. Please try again.');
        });
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                placeholder="Email"
                onChangeText={text => setEmail(text)}
                value={email}
                autoCapitalize="none"
                keyboardType="email-address"
            />
            <TextInput
                style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
                placeholder="Password"
                onChangeText={text => setPassword(text)}
                value={password}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default LoginScreen;
