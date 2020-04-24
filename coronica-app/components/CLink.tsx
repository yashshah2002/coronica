import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function CLink({ title, onPress }) {
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
    marginTop: 10,
  },
  buttonText: {
    color: '#000000',
    fontSize: 15,
    textAlign: 'center',
    textDecorationLine: 'underline',
  }
})
