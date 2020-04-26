import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { CStyles } from '../CStyles';
import CIconButton from '../components/CIconButton';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Firebase from '../config/Firebase';

export default function Clicker({navigation}) {
  const [clicks, setClicks] = useState(0)
  const cookie = <Icon name="cookie" size={200} color="#011638" />;

  return (
    <View style={CStyles.container}>
      <Text style={CStyles.titleStyle}>Destress Clicker!</Text>
      <Text style={CStyles.textStyle}>Click as much as you can!!!</Text>
      <CIconButton icon={cookie} onPress={() => {
        setClicks(clicks+1)
      }}/>
      <Text style={CStyles.titleStyle}>{clicks}</Text>
    </View>
  );

}
