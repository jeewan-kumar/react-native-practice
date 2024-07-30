import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.heading}>ElevatedCard</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.card1]}>
                    <Text>COCHINEAL RED</Text>
                </View>
                <View style={[styles.card, styles.card2]}>
                    <Text>MONZA</Text>
                </View>
                <View style={[styles.card, styles.card3]}>
                    <Text>BREWED MUSTARD-BROWN</Text>
                </View>
                <View style={[styles.card, styles.card4]}>
                    <Text>POMEGRANATE</Text>
                </View>
                <View style={[styles.card, styles.card5]}>
                    <Text>RED ORANGE</Text>
                </View>
                <View style={[styles.card, styles.card6]}>
                    <Text>FOREIGN CRIMSON</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default ElevatedCard;

const styles = StyleSheet.create({
    heading: {
        textAlign: 'center',
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
        marginHorizontal: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    card1: { backgroundColor: 'red' },
    card2: { backgroundColor: 'green' },
    card3: { backgroundColor: 'blue' },
    card4: { backgroundColor: 'yellow' },
    card5: { backgroundColor: 'orange' },
    card6: { backgroundColor: 'purple' },
});
