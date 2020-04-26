import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CDrawerButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress = {onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{ title }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#011638',
    paddingVertical: 10,
  },
  buttonText: {
    color: '#EDFFEC',
    textAlign: 'center',
    fontFamily: 'montserrat-regular',
  }
})
