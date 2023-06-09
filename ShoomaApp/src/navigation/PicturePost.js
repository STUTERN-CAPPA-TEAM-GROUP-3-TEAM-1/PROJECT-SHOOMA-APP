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
import React from "react";
import { Link } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";
import feeds from "../data/feed.json";
import FeedItem from "../navigation/FeedItem";
import { SafeAreaView } from "react-native-safe-area-context";

const PicturePost = () => {
  return (
    <>
      <SafeAreaView>
        <Image
          source={require("../assets/images/post_logo.png")}
          style={{ width: 83, height: 18, borderRadius: 7 }}
        />

        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <TouchableOpacity style={{ marginRight: 4 }}>
              <Image
                source={require("../assets/images/post1.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text style={{ fontSize: 11, color: "#B7B7B7" }}>Your story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 4 }}>
              <Image
                source={require("../assets/images/post2.png")}
                style={{ width: 62, height: 63 }}
              />
              <Text style={{ fontSize: 11, color: "#7A7A7A" }}>Kiesanmi.a</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 4 }}>
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

            <TouchableOpacity style={{ marginRight: 4 }}>
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
            <TouchableOpacity style={{ marginRight: 4 }}>
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
            <TouchableOpacity>
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
                Dan.xo
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
        >
          <TouchableOpacity
            style={{
              height: 26,
              backgroundColor: "#rgba(22, 216, 119, 0.1)",
              marginRight: 5,
              width: "23%",
              borderRadius: 3,
              paddingTop: 3,
            }}
          >
            <Link
              style={{ fontSize: 13, textAlign: "center", color: "#04773E" }}
              to={{ screen: "FeedScreen", params: { id: "influence" } }}
            >
              Text Posts
            </Link>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 26,
              backgroundColor: "#16D877",
              width: "30%",
              marginRight: 5,
              borderRadius: 3,
              paddingTop: 3,
            }}
          >
            <Link
              style={{ fontSize: 13, textAlign: "center", color: "white" }}
              to={{ screen: "PicturePost", params: { id: "influence" } }}
            >
              Picture Posts
            </Link>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 26,
              backgroundColor: "#rgba(22, 216, 119, 0.1)",
              width: "30%",
              borderRadius: 3,
              paddingTop: 3,
            }}
          >
            <Link
              style={{ fontSize: 13, textAlign: "center", color: "#04773E" }}
              to={{ screen: "HybridPost", params: { id: "influence" } }}
            >
              Hybrid Posts
            </Link>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <FlatList
            data={feeds.feed}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => <FeedItem data={item} />}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PicturePost;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#ffffff",
    marginTop: 10,
  },

  headerSec: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,

    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
});
