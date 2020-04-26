import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


export default function CButton({ icon, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>{icon}</View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
})
