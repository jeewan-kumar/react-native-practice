import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

export default function ContactList() {
    const contacts = [
        {
            id: 1,
            name: 'Jeewan Sahu',
            email: 'jeewansahu@gmail.com',
            phoneNumber: '123-456-7890',
            image: require('../img/P_1.jpg'),
        },
        {
            id: 2,
            name: 'Pic 2nd',
            email: 'jeewansahu@gmail.com',
            phoneNumber: '123-456-7890',
            image: require('../img/P_2.jpg'),
        },
        {
            id: 3,
            name: 'Pic 3rd',
            email: 'jeewansahu@gmail.com',
            phoneNumber: '123-456-7890',
            image: require('../img/P_3.jpg'),
        },
        {
            id: 4,
            name: 'Pic 4th',
            email: 'jeewansahu@gmail.com',
            phoneNumber: '123-456-7890',
            image: require('../img/P_4.jpg'),
        },
        {
            id: 5,
            name: 'Pic 5th',
            email: 'jeewansahu@gmail.com',
            phoneNumber: '123-456-7890',
            image: require('../img/P_5.jpg'),
        },
    ]

    return (
        <View>
            <Text style={styles.headingText}>Contact List</Text>
            <ScrollView style={styles.container} scrollEnabled={false}>
                {contacts.map(({ id, name, email, phoneNumber, image }) => (
                    <View key={id} style={styles.userCard}>
                        <Image source={image} style={styles.userImage} />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userInfo}>{email}</Text>
                            <Text style={styles.userInfo}>{phoneNumber}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
    container: {
        paddingHorizontal: 16,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#8d3daf',
        padding: 10,
        borderRadius: 10,
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 14,
        backgroundColor: '#8D3DAF',
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black',
    },
    userInfo: {
        color: 'white',
    },
})
