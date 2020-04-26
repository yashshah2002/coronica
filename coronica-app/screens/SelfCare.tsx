import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  NavigationScreenComponent,
  NavigationScreenProps,
  NavigationStackScreenOptions
} from "react-navigation";
import { CStyles } from '../CStyles.tsx';

function Item({ title, pointVal, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#96a6e2', marginTop: 10, paddingHorizontal: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center' }}>
                <Text style={CStyles.textStyle}>{title}</Text>
                <Text style={CStyles.textStyle}>{pointVal}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function SelfCare({navigation}) {
    const [points, setPoints] = useState(0);

  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Self Care</Text>
    </View>
  );

}
