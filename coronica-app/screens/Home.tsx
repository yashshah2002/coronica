import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CButton from '../components/CButton.tsx';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { CStyles } from '../CStyles.tsx'

export default function Home({navigation}) {
  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Crowdsourced Playlist</Text>
      <CButton title='Profile' onPress={() => navigation.navigate('Profile')}/>
      <View style={CStyles.bottom}>
        <Text style={CStyles.textStyle}>Created by Caitlin Tibbetts, Afrida Tasnim, and Harsha Srikara (2020)</Text>
      </View>
    </View>
  );

}
