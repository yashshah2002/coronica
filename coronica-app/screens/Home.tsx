import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import CButton from '../components/CButton.tsx';
import CLink from '../components/CLink.tsx';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { CStyles } from '../CStyles.tsx';
import Firebase from '../config/Firebase';

export default function Home({navigation}) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;
  if (!user) {
    return (
      <View style={CStyles.container}>
        <Text style={CStyles.titleStyle}>Welcome to Coronica</Text>
        <TextInput
            value={email}
            onChangeText={email => setEmail(email)}
            placeholder='Email'
            autoCapitalize='none'
        />
        <TextInput
            value={password}
            onChangeText={password => setPassword(password)}
            placeholder='Password'
            secureTextEntry={true}
        />
        <CButton title='Log In' onPress= {() => {
          Firebase.auth()
              .signInWithEmailAndPassword(email,password)
              .then(() => navigation.navigate('Profile'))
              .catch(error => console.log(error))
        }}/>
        <CLink title='Sign Up' onPress={() => navigation.navigate('Signup')}/>
      </View>
    )
  }
  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Welcome to Coronica, {user.email}</Text>
      <CButton title='Profile' onPress={() => navigation.navigate('Profile')}/>
      <CLink title='Log out' onPress={() => {
        Firebase.auth()
          .signOut()
          .then(() => console.log('User signed out!'));
      }}/>
    </View>
  );

}
