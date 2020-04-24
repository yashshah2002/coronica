import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={ Home } options={{ title: '' }}/>
        <Stack.Screen name="Signup" component={ Signup } options={{ title: '' }}/>
        <Stack.Screen name="Profile" component={ Profile } options={{ title: '' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
