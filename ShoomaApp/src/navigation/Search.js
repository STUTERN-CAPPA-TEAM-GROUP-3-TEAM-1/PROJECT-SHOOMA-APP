import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import feeds from "../data/feed.json";
import FeedItem from "../navigation/FeedItem";
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <Text
            style={{
              fontWeight: 600,
              marginTop: 20,
              marginBottom: 10,
              fontSize: 16,
              textAlign: "center",
            }}
          >
            What's on everyone's mind?
          </Text>
          <View
            style={{
              paddingLeft: 5,
              marginLeft: 5,
              flexDirection: "row",
              height: 44,
              width: "96%",
              backgroundColor: "#EDEDED",
              marginTop: 20,
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            <Image
              source={require("../assets/icons/searchicon.png")}
              style={{ width: 15, height: 15, alignSelf: "center" }}
            />
            <TextInput
              style={{
                fontSize: 14,
                color: "#656663",
                textAlign: "center",
                marginLeft: 5,
              }}
              placeholder="Search"
            />
          </View>

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

export default Search;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#ffffff",
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
