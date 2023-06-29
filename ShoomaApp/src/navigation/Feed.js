import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import feeds from "../data/feed.json";
import FeedItem from "../navigation/FeedItem";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthentication } from "../hook/useAuthentication";

const Feed = () => {
  const { user } = useAuthentication();
  return (
    <>
      <SafeAreaView style={{ marginTop: 30 }}>
        <Image
          source={require("../assets/images/post_logo.png")}
          style={{ width: 83, height: 18, marginLeft: 6 }}
        />

        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity style={{ marginRight: 8, marginLeft: 6 }}>
              <Image
                source={require("../assets/images/post1.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text style={{ fontSize: 11, color: "#B7B7B7" }}>Your story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 8 }}>
              <Image
                source={require("../assets/images/post2.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text style={{ fontSize: 11, color: "#7A7A7A" }}>Kiesanmi.a</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 8 }}>
              <Image
                source={require("../assets/images/post3.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: "#7A7A7A",
                  textAlign: "center",
                }}
              >
                Ada.xo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginRight: 8 }}>
              <Image
                source={require("../assets/images/post4.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: "#7A7A7A",
                  textAlign: "center",
                }}
              >
                Aderoju.x
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 7 }}>
              <Image
                source={require("../assets/images/post5.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text
                style={{
                  fontSize: 11,
                  color: "#7A7A7A",
                  textAlign: "center",
                }}
              >
                Sunmade
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 8 }}>
          <Text style={{ fontSize: 17, fontWeight: 400 }}>
            What's on everyone's mind?
          </Text>
        </View>

        <View style={styles.container}>
          <FlatList
            data={feeds.feed}
            contentContainerStyle={{}}
            renderItem={({ item }) => <FeedItem data={item} />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    height: 500,

    marginTop: 15,
  },

  headerSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,

    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    postContainer: {
      padding: 16,
      backgroundColor: "#fff",
      marginBottom: 16,
    },
    postText: {
      fontSize: 16,
      marginBottom: 8,
    },
    likeButton: {
      backgroundColor: "#2196F3",
      padding: 8,
      borderRadius: 4,
      alignSelf: "flex-start",
    },
    likeButtonText: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "bold",
    },
    likeCountText: {
      fontSize: 14,
      marginTop: 8,
    },
  },
});
