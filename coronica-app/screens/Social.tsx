import React, { createRef, useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { CStyles } from '../CStyles';


const DATA = [
    {
        
        title: 'Call your parents',
        pointVal: 15
    },
    {
        
        title: 'Do a Netflix Party with your friends',
        pointVal: 20
    },
    {
        
        title: 'Host a virtual game night',
        pointVal: 30
    },
];

function Item({ title, pointVal, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: '#96a6e2', marginTop: 10, paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 40, alignItems: 'center' }}>
                <Text style={CStyles.textStyle}>{title}</Text>
                <Text style={CStyles.textStyle}>{pointVal}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default function Social({navigation}) {
    const [points, setPoints] = useState(0);
  return (
      <View style={CStyles.container}>
          <AnimatedCircularProgress
              size={200}
              width={25}
              fill={points}
              tintColor="#011638"
              backgroundColor="#96a6e2"
              style={{ marginTop: 100 }}>
              {
                  (fill) => (
                      <Text style={CStyles.titleStyle}>
                          {points}
                      </Text>
                  )
              }
          </AnimatedCircularProgress>
          <FlatList
              style={{ paddingVertical: 20, width: 300 }}
              data={DATA}
              renderItem={({ item }) => <Item title={item.title} pointVal={item.pointVal} onPress={() => {
                  setPoints(points + item.pointVal);
              }} />}
              keyExtractor={item => item.id} />
      </View>
  );

}
