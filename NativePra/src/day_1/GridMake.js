import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const GridMake = () => {
  const users = [
    { id: '1', name: 'John Doe1', age: 25 },
    { id: '2', name: 'John Doe2', age: 25 },
    { id: '3', name: 'John Doe3', age: 25 },
    { id: '4', name: 'John Doe4', age: 25 },
    { id: '1', name: 'John Doe1', age: 25 },
    { id: '2', name: 'John Doe2', age: 25 },
    { id: '3', name: 'John Doe3', age: 25 },
    { id: '4', name: 'John Doe4', age: 25 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GridMake</Text>
      <View style={styles.gridContainer}>
        {users.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.age}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default GridMake;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: '30%', // Adjust width as needed for your grid layout
    aspectRatio: 1, // Maintain aspect ratio
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    margin: '1%',
  },
  itemText: {
    fontSize: 18,
  },
});
