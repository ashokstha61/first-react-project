/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {Button, Text, View} from 'react-native';

function App() {
  const [name, setName] = useState('anil');
  function testName() {
    setName('sagar');
  }
  return (
    <View>
      <Text>Use of useState</Text>
      <Text style={{fontSize: 20}}>{name}</Text>
      <Button title="Update name" onPress={() => setName('hari')} />
      <User name={name} age={29} />
    </View>
  );
}

const User = props => {
  return (
    <View style={{backgroundColor: 'green', padding: 5}}>
      <Text style={{fontSize: 25}}>Name: {props.name}</Text>
      <Text style={{fontSize: 24}}> Age: {props.age}</Text>
    </View>
  );
};

export default App;
