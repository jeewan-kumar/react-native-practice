import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View style={{backgroundColor:'black'}}>
      <Text style={[styles.headingText,{fontSize:24}]}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text style={styles.headingText}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text style={styles.headingText}>Green</Text>
        </View>
        <View style={[styles.card,styles.cardTree]}>
            <Text style={styles.headingText}>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardTree]}>
            <Text style={styles.headingText}>Blue</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    headingText:{
        fontWeight:'bold',
        color:'white',
        textAlign:'center',
    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:5,
    },
    card:{
        flex:1,
        width: 100,
        height: 100,
        justifyContent:'center',
        borderRadius:8,
        margin:8,
    },
    cardOne:{
        backgroundColor:'#D81B60',
    },
    cardTree:{
        backgroundColor:'#3949AB',
    },
    cardTwo:{
        backgroundColor:'#616161',
    },

})