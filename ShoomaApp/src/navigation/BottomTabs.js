import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../navigation/Home";
import Profile from "../navigation/Profile";
import Messaging from "../navigation/Messaging";
import Search from "../navigation/Search";
import CreatePost from "../navigation/CreatePost";
import FeedScreen from "../navigation/FeedScreen";
import Settings from "../navigation/Settings";
import { Image, View } from "react-native";
import ImagePost from "../navigation/ImagePost";
import ProfileView from "../navigation/ProfileView";
import Posts from "../navigation/Posts";
import TopBar from "../navigation/TopBar";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Posts"
      screenOptions={{ headerShown: true, tabBarShowLabel: false }}
    >
      <Tab.Screen
        style={{ backgroundColor: "#F3F3F3" }}
        name="Posts"
        component={TopBar}
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
                    width: 18,
                    height: 20,
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
                    width: 23,
                    height: 23,
                    tintColor: "#979797",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
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
                    width: 24,
                    height: 24,
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
                    width: 24,
                    height: 24,
                    tintColor: "#979797",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
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
                    width: 24,
                    height: 24,
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
