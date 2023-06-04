import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import UserData from '../screens/UserData';
import EmailVerify from '../screens/EmailVerify';
import EmailCode from '../screens/EmailCode'
import Home from '../navigation/Home';
import Messaging from '../navigation/Messaging';
import Post from '../navigation/Post';
import Profile from '../navigation/Profile';
import Search from '../navigation/Search';
import BottomTabs from '../navigation/BottomTabs';
import HomeImage from '../components/HomeImage';
import InfluencerPage from './InfluencerPage';
import PicturePost from '../navigation/PicturePost';
import HybridPost from '../navigation/HybridPost';


const Stack = createNativeStackNavigator();

const AuthStack =() =>{
  return (
    

      <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="InfluencerPage" component={InfluencerPage} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Post" component={Post} />
        <Stack.Screen name="PicturePost" component={PicturePost} />
        <Stack.Screen name="HybridPost" component={HybridPost} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserData" component={UserData} />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
        <Stack.Screen name="EmailCode" component={EmailCode} />
        <Stack.Screen name="HomeImage" component={HomeImage} />
       
        
      </Stack.Navigator>
    
    
  );
}

export default AuthStack;