import React, { useState } from 'react';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/Home";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'montserrat-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'montserrat-semibolditalic': require('./assets/fonts/Montserrat-SemiBoldItalic.ttf')
})

const Stack = createStackNavigator();
const Switch = createSwitchNavigator();
const Drawer = createDrawerNavigator();

function Login() {
  return (
     <NavigationContainer>
      <Switch.Navigator initialRouteName='Home'>
        <Switch.Screen name="Home" component={ Home } options={{ title: '' }}/>
        <Switch.Screen name="Signup" component={ Signup } options={{ title: '' }}/>
      </Switch.Navigator>
    </NavigationContainer>
  );
}

function Activities() {
  return (
     <NavigationContainer>
      <Drawer.Navigator initialRouteName='Inventory'>
        <Drawer.Screen name="Inventory" component={ Inventory } options={{ title: '' }}/>
        <Drawer.Screen name="Physical" component={ Physical } options={{ title: '' }}/>
        <Drawer.Screen name="SelfCare" component={ SelfCare } options={{ title: '' }}/>
        <Drawer.Screen name="Social" component={ Social } options={{ title: '' }}/>
        <Drawer.Screen name="Clicker" component={ Clicker } options={{ title: '' }}/>
        <Drawer.Screen name="Health" component={ Health } options={{ title: '' }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if(fontsLoaded){
    return (
       <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Login" component={ Login } options={{ title: '' }}/>
          <Stack.Screen name="Activities" component={ Activities } options={{ title: '' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={()=> setFontsLoaded(true)}
      />
    );
  }
}
