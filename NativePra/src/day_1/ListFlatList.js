import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ListFlatList = () => {
  const users = [
    { id: '1', name: 'John Doe1', age: 25 },
    { id: '2', name: 'John Doe2', age: 25 },
    { id: '3', name: 'John Doe3', age: 25 },
    { id: '4', name: 'John Doe4', age: 25 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ListFlatList</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>name : {item.name}</Text>
            <Text style={styles.itemText}>Age : {item.age}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListFlatList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
});
