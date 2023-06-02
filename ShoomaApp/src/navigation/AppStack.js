import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../navigation/Home';
import Messaging from '../navigation/Messaging';
import Post from '../navigation/Post';
import Profile from '../navigation/Profile';
import Search from '../navigation/Search';
import BottomTabs from '../navigation/BottomTabs';


const Stack = createNativeStackNavigator();

const AppStack =() =>{
  return (
    

      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Post" component={Post} />
       
        
      </Stack.Navigator>
    
    
  );
}

export default AppStack;