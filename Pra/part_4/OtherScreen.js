// OtherScreen.js

import React from 'react';
import { View, Text } from 'react-native';

const OtherScreen = ({ route }) => {
    const { userId, token } = route.params;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>User ID: {userId}</Text>
            <Text>Token: {token}</Text>
        </View>
    );
};

export default OtherScreen;
