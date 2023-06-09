import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import EmailVerify from "../screens/EmailVerify";

import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
