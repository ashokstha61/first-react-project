import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const resetData = () => {
    setName('');
    setEmail('');
    setPassword('');
    setDisplay(false);
  };

  return (
    <View style={design.container}>
      <Text style={{fontSize: 30}}>Simple Form in React Native</Text>

      <Text style={design.label}>Enter your Name</Text>
      <TextInput
        style={design.textInput}
        placeholder="Enter User Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <Text style={design.label}>Enter your Email</Text>
      <TextInput
        style={design.textInput}
        placeholder="Enter User Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <Text style={design.label}>Enter your Password</Text>
      <TextInput
        style={design.textInput}
        placeholder="Enter User Password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <View style={design.buttonContainer}>
        <View style={design.button}>
          <Button color='green' title="Print Details" onPress={() => setDisplay(true)} />
        </View>
        <View style={design.button}>
          <Button color='red' title="Clear" onPress={resetData} />
        </View>
      </View>

      {display && (
        <View style={design.output}>
          <Text style={design.outputText}>Name: {name}</Text>
          <Text style={design.outputText}>Email: {email}</Text>
          <Text style={design.outputText}>Password: {password}</Text>
        </View>
      )}
    </View>
  );
}

const design = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 20,
    margin: 10,
  },
  textInput: {
    fontSize: 18,
    margin: 5,
    borderColor: 'red',
    borderWidth: 2,
    padding: 10,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 5,
  },
  button: {
    marginVertical: 5,
  },
  output: {
    marginTop: 20,
  },
  outputText: {
    fontSize: 18,
    color: 'yellow',
  },
});

export default App;
