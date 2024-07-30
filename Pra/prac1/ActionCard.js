import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const ActionCard = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink);
    }

    return (
        <View>
            <Text style={styles.heading}>Blog Card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>Why Visiting Bihar</Text>
                </View>
                <Image
                    source={require('../img/BiharMap.jpg')}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4}>You can use this BiharBlogContainer component in your app by passing in an array of blog posts specific to Bihar and a function to handle post presses. Adjust the styling and functionality as needed to fit your application's requirements!</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openWebsite('https://www.istockphoto.com/photos/bihar')}>
                        <Text style={styles.socalLink}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openWebsite('https://www.istockphoto.com/photos/bihar')}>
                        <Text style={styles.socalLink}>Follow Me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard;

const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        textAlign: 'center',
    },
    card: {
        width: width - 32, // Adjusted for margin
        marginVertical: 12,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    elevatedCard: {
        backgroundColor: '#E07C24',
    },
    headingContainer: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headingText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600'
    },
    image: {
        height: 190,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bodyContainer: {
        padding: 10,
    },
    footerContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    socalLink:{
        fontSize:16,
        color:'#000000',
        backgroundColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:10,
        borderRadius:6,

    },
});
