import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppStack from './src/navigation/AuthStack';



const Stack = createNativeStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      
      <AppStack/>
      
      
    </NavigationContainer>
    
  );
}

export default App;