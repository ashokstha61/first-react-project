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
      <Text style={{fontSize: 20}}>{name}</Text>
      <Button title="Update name" onPress={testName} />
      <User name={'ram'} />
    </View>
  );
}

const User = props => {
  return (
    <View style={{backgroundColor: 'green', padding: 5}}>
      <Text style={{fontSize: 25}}>{props.name}</Text>
    </View>
  );
};

export default App;
