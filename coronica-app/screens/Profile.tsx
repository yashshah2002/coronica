import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CButton from '../components/CButton.tsx';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { CStyles } from '../CStyles.tsx';

export default function Profile({navigation}) {
  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Profile</Text>
    </View>
  );

}
