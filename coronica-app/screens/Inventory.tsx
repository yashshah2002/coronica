import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CStyles } from '../CStyles';
import CIconButton from '../components/CIconButton';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CButton from '../components/CButton';
import Firebase from '../config/Firebase';

import axios from 'axios'

export default function Inventory({navigation}) {
  const happy = <Icon name="smile-beam" size={100} color="#011638" />;
  const sad = <Icon name="frown" size={100} color="#011638" />;
  const neutral = <Icon name="meh" size={100} color="#011638" />;

  const [choice, setChoice] = useState('');

  const name = Firebase.auth().currentUser?.displayName

  if(choice === '') {
    return (
      <View style={CStyles.container}>
        <Text style={CStyles.titleStyle}>Welcome, {name}!</Text>
        <Text style={CStyles.textStyle}>What's your mood today?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <CIconButton icon={happy} onPress={() => {
            setChoice('happy')
            navigation.navigate('RouteInventory');
          }}/>
          <CIconButton icon={neutral} onPress={() => {
            setChoice('meh')
            navigation.navigate('RouteInventory');
          }}/>
          <CIconButton icon={sad} onPress={() => {
            setChoice('sad')
            navigation.navigate('RouteInventory');
          }}/>
        </View>
      </View>
    );
  }
  if(choice === 'happy') {
    return (
      <View style={CStyles.container}>
        <Text style={CStyles.titleStyle}>Welcome, {name}!</Text>
        <Text style={CStyles.textStyle}>I'm glad your feeling happy today!</Text> 
        <Text style={CStyles.textStyle}>Why not try out some physical activity to bolster those good spirits?</Text>
        <View style={{ height: 20 }} />
        <CButton title={'Let\'s go!'} onPress={() => {
          navigation.navigate('RoutePhysical');
        }}/>
      </View>
    );
  }
  if(choice === 'meh') {
    return (
      <View style={CStyles.container}>
        <Text style={CStyles.titleStyle}>Welcome, {name}!</Text>
        <Text style={CStyles.textStyle}>So you're just feeling meh today, huh?</Text> 
        <Text style={CStyles.textStyle}>Why not call up some friends to get your energy back up?</Text>
        <View style={{ height: 20 }} />
        <CButton title={'Let\'s go!'} onPress={() => {
          navigation.navigate('RouteSocial');
        }}/>
      </View>
    );
  }
  if(choice === 'sad') {
    return (
      <View style={CStyles.container}>
        <Text style={CStyles.titleStyle}>Welcome, {name}!</Text>
        <Text style={CStyles.textStyle}>I'm so sorry you're feeling so negative today.</Text> 
        <Text style={CStyles.textStyle}>Looks like you're in need of some self-care!</Text>
        <View style={{ height: 20 }} />
        <CButton title={'Let\'s go!'} onPress={() => {
          navigation.navigate('RouteSelfCare');
        }}/>
      </View>
    );
  }
}
