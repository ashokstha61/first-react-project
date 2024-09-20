import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

function App() {
  const users = [
    {
      id: 1,
      name: 'anil',
    },
    {
      id: 2,
      name: 'hari',
    },
    {
      id: 3,
      name: 'ram',
    },
    {
      id: 4,
      name: 'shyam',
    },
  ];
  return (
    <View>
      <Text style={design.text}>List with Flat list component</Text>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Text style={design.textconntainer}>{item.name}</Text>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const design = StyleSheet.create({
  textconntainer: {
    backgroundColor: 'yellow',
    padding: 10,
    margin: 8,
    color: 'black',
    fontSize: 20,
    borderColor: 'green',
    borderRadius: 5,
    borderWidth: 2,
  },
  text: {
    paddingLeft: 10,
    margin: 5,
    fontSize: 25,
  },
});

export default App;
