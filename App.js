import React,{Component} from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import FlowerDetect from './Components/FlowerDetect';
import PestDetect from './Components/PestDetect';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import LoginSignup from './Components/loginSignup';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack=createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login/Signup">
      <Stack.Screen name="Login/signup" component={LoginSignup} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Leaves Disease" component={FlowerDetect} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Pest" component={PestDetect} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;