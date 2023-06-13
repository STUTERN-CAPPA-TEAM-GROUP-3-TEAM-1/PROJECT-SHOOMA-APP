import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../navigation/Home";
import Profile from "../navigation/Profile";
import Messaging from "../navigation/Messaging";
import Search from "../navigation/Search";
import Post from "../navigation/Post";
import FeedScreen from "../navigation/FeedScreen";
import Settings from "../navigation/Settings";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true, tabBarShowLabel: false }}
    >
      <Tab.Screen
        style={{ backgroundColor: "#F3F3F3" }}
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/homeicon.png")}
                  style={{
                    width: 16,
                    height: 18,
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/search-icon.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#979797",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/plus.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#979797",
                  }}
                />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Messaging"
        component={Messaging}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/chat.png")}
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: "#979797",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <View
                style={{
                  paddingTop: 12,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../assets/profile.png")}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
