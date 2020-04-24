import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import CButton from '../components/CButton.tsx';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { CStyles } from '../CStyles.tsx';
import Firebase from '../config/Firebase';

export default function Signup({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Welcome to Coronica</Text>
      <TextInput
          value={ name }
          onChangeText={name => setName(name)}
          placeholder='Name'
      />
      <TextInput
          value={ email }
          onChangeText={email => setEmail(email)}
          placeholder='Email'
          autoCapitalize='none'
      />
      <TextInput
          value={ password }
          onChangeText={password => setPassword(password)}
          placeholder='Password'
          secureTextEntry={true}
      />
      <CButton title='Sign Up!' onPress={() => {
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Profile'))
            .catch(error => console.log(error))
          }
        }/>
    </View>
  );

}
