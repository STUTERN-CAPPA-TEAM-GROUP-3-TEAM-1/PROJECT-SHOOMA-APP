import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import {StatusBar} from 'react-native';
import EmailVerify from './src/screens/EmailVerify';
import EmailCode from './src/screens/EmailCode';
import Home from './src/navigation/Home';
import Messaging from './src/navigation/Messaging';
import Profile from './src/navigation/Profile';
import Search from './src/navigation/Search';
import Post from './src/navigation/Post';
import BottomTabs from './src/navigation/BottomTabs';


const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Bottom Tabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
        <Stack.Screen name="EmailCode" component={EmailCode} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App;