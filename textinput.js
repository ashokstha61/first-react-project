import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
function App() {
  const [name, setName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}> Handle text input </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={{fontSize: 20, margin: 10}}>Your Name is: {name}</Text>
      <Button title="Clear" onPress={() => setName('')} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'black',
    borderWidth: 2,
    borderColor: 'green',
    margin: 10,
    backgroundColor: 'grey',
  },
});

export default App;
