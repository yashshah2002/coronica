import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { CStyles } from '../CStyles';
import CButton from '../components/CButton';

export default function Health({ navigation }) {
  const [city, setCity] = useState('')
  const [finished, setFinished] = useState(false)
  if(!finished) {
    return (
      <View style={CStyles.container}>
        <Text style={CStyles.titleStyle}>Health Check-in</Text>
        <Text style={CStyles.textStyle}>Do you have a fever?</Text>
        <Text style={CStyles.textStyle}>Do you have shortness of breath?</Text>
        <Text style={CStyles.textStyle}>Do you have a difficulty tasting or smelling?</Text>
        <Text style={CStyles.textStyle}>Go to the doctor!</Text>
        <Text style={CStyles.textStyle}></Text>
        <Text style={CStyles.textStyle}>And tell us what city you're in!</Text>
        <Text style={CStyles.textStyle}>For our COVID-19 heat map</Text>
        <TextInput style={CStyles.textInputStyle} value={city} onChangeText={city => setCity(city)}/>
        <CButton title='Send' onPress={() => {
          console.log(city); //POST REQUEST HERE
          setFinished(true)
          navigation.navigate('RouteHealth')
        }}/>
      </View>
    );
  }

  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Health Check-in</Text>
      <Text style={CStyles.textStyle}>Do you have a fever?</Text>
      <Text style={CStyles.textStyle}>Do you have shortness of breath?</Text>
      <Text style={CStyles.textStyle}>Do you have a difficulty tasting or smelling?</Text>
      <Text style={CStyles.textStyle}>Go to the doctor!</Text>
      <Text style={CStyles.textStyle}></Text>
      <Text style={CStyles.titleStyle}>{city}</Text>
    </View>
  );

}
