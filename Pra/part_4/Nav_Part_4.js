import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import OtherScreen from './OtherScreen';

const Stack = createStackNavigator();
const Nav_Part_4 = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="OtherScreen" component={OtherScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Nav_Part_4
const styles = StyleSheet.create({})