import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TextButtonView = () => {
    return (
        <View>
            <Text style={styles.hello}>TextButtonView</Text>
            <Text style={{ fontSize: 20 }}>Hello second text components</Text>
            <TouchableOpacity onPress={''} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 20 }}>
    <Text style={{ color: 'white', textAlign: 'center' }}>Press me</Text>
    </TouchableOpacity>
        </View>
    )
}

export default TextButtonView

const styles = StyleSheet.create({
    hello: {
        fontSize: 30,
        textAlign: 'center',
    },
   
})