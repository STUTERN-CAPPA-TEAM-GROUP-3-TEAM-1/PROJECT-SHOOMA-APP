import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Posts from "../navigation/Posts";
import PicturePost from "../navigation/PicturePost";
import HybridPost from "../navigation/HybridPost";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#0C7842",
        tabBarInactiveTintColor: "#ccc",

        tabBarIndicatorStyle: {
          borderBottomColor: "#0C7842",
          borderBottomWidth: 2,
        },
        tabBarLabelStyle: { marginTop: insets.top },
      })}
    >
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{ tabBarLabel: "Text Post" }}
      />
      <Tab.Screen
        name="PicturePost"
        component={PicturePost}
        options={{ tabBarLabel: "Picture Post" }}
      />
      <Tab.Screen
        name="HybridPost"
        component={HybridPost}
        options={{ tabBarLabel: "Hybrid Post" }}
      />
    </Tab.Navigator>
  );
}
export default function TopBar() {
  return <MyTabs />;
}
