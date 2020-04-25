import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
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
        <Text style={CStyles.titleStyle}>Welcome to Coronica!</Text>
        <TextInput
          style={CStyles.textInputStyle}
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder='Email'
          autoCapitalize='none'
        />
        <TextInput
          style={CStyles.textInputStyle}
          value={password}
          onChangeText={password => setPassword(password)}
          placeholder='Password'
          secureTextEntry={true}
        />
        <CButton title='Log In' onPress= {() => {
          Firebase.auth()
              .signInWithEmailAndPassword(email,password)
              .then(() => navigation.navigate('Profile'))
              .catch(error => {
                if(error.code === 'auth/invalid-email') {
                  Alert.alert(
                    "Error",
                    "Invalid email.",
                    [
                     { text: "OK", onPress: () => {setEmail(''); setPassword(''); } }
                    ],
                    { cancelable: false }
                  );
                }
                if(error.code === 'auth/user-disabled') {
                  Alert.alert(
                    "Error",
                    "User was disabled.",
                    [
                     { text: "OK", onPress: () => {setEmail(''); setPassword(''); } }
                    ],
                    { cancelable: false }
                  );
                }
                if(error.code === 'auth/user-not-found') {
                  Alert.alert(
                    "Error",
                    "User was not found.",
                    [
                      { text: "Cancel", onPress: () => {setEmail(''); setPassword(''); } },
                      { text: "Signup", onPress: () => navigation.navigate('Signup') }
                    ],
                    { cancelable: false }
                  );
                }
                if(error.code === 'auth/wrong-password') {
                  Alert.alert(
                    "Error",
                    "Wrong password.",
                    [
                      { text: "OK", onPress: () => {setEmail(''); setPassword(''); } }
                    ],
                    { cancelable: false }
                  );
                }
              })
        }}/>
        <CLink title={'Don\'t have an account? Sign Up'} onPress={() => navigation.navigate('Signup')}/>
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
