/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
{/*import { Text ,View,  StyleSheet, Button } from 'react-native';
import CollegeData from './component/companydata';
let age = 20;
var email = 'abc@gmail.com';
function fruit(){
  return 'mango';
}*/}

function App(){
  {/*
    const buton = ()=>{
    console.warn('Pressed on button.');
  };
  const button2 = ()=>{
    console.warn('pressed here');
  };
  const button3 = (val)=>{
    console.warn(val);
  };
  */}
  
  const [name,setName] = useState('anil');
  function testName(){
    setName('sagar');
  }
  return (
    <View>
      {/*<Text style={styles.text}>Hello Text hello</Text>
      <Text style={styles.text}>Bye bye</Text>
      <Text style={styles.text}>{fruit()}</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.age}> {age}</Text>
      <Text style={styles.text}>{age === 25 ? 'above 20' : 'Unfit age'}</Text>
      <Button title="Press Here" onPress={buton} color={'green'}/>
      <Text style={styles.button}> Hello Component</Text>
      <Button title="Press me" onPress={()=>button2()}/>
      <UserData/>
      <CollegeData/>
      <Button title="Press me" onPress={()=>button3('Hello ram')} color={'green'}/>*/}
      <Text style={{fontSize:20}}>{name}</Text>
      <Button title='Update name' onPress={testName}/>
    </View>
  );
}
{/*
  const UserData = ()=>{
return(
  <View>
    <Text style={{fontSize:25}}>Name: Hari</Text>
    <Text style={{fontSize:25}}>age: 26</Text>
    <Text style={{fontSize:25}}>Email: Hari@gmail.com</Text>
  </View>
);
};
*/}




export default App;
