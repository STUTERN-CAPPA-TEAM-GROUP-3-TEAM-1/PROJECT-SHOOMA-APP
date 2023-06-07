import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../navigation/Home";
import BottomTabs from "../navigation/BottomTabs";
import InfluencerPage from "../navigation/InfluencerPage";
import HybridPost from "../navigation/HybridPost";
import PicturePost from "../navigation/PicturePost";
import Chat from "../navigation/Chat";
import Messaging from "../navigation/Messaging";
import FeedItem from "../navigation/FeedItem";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="InfluencerPage" component={InfluencerPage} />
        <Stack.Screen name="PicturePost" component={PicturePost} />
        <Stack.Screen name="HybridPost" component={HybridPost} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Messaging" component={Messaging} />
        <Stack.Screen name="FeedItem" component={FeedItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppStack;
