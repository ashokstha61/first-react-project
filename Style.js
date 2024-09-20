/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import External from './style/style';
function App() {
  return (
    <View>
      <Text style={{fontSize: 20, marginLeft: 10}}>Style in React native</Text>
      <Text style={{fontSize: 30, color: 'red', padding: 10}}>
        Inline style
      </Text>
      <Text style={Internal.textBox}> Internal style</Text>
      <Text style={Internal.textBox}> Internal style</Text>
      <Text style={External.textBox}> External style</Text>
    </View>
  );
}
const Internal = StyleSheet.create({
  textBox: {
    color: 'blue',
    fontSize: 30,
    backgroundColor: 'green',
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    height: 100,
    textAlignVertical: 'center',
    textAlign: 'center',
    borderColor: 'red',
    borderWidth: 2,
  },
});

export default App;
