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
import InstaStory from "react-native-insta-story";
import { StatusBar } from "expo-status-bar";

import Icon from "react-native-vector-icons/Ionicons";
import feeds from "../data/feed.json";
import FeedItem from "../navigation/FeedItem";
import { SafeAreaView } from "react-native-safe-area-context";

const PicturePost = () => {
  const data = [
    {
      user_id: 1,
      user_image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg",
      user_name: "Mary Daniels",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://cdn.vox-cdn.com/thumbor/yti7UrAkQQuAjmusqpg_mboD8v8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23406204/GettyImages_1346022120.jpg",
          swipeText: "Beautiful world",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        "https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864",
      user_name: "Ayomide",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://images.unsplash.com/photo-1572359642202-3cc832e60700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JzcG9ydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://houseoflor.com/wp-content/uploads/2021/09/pexels-felix-mittermeier-1792626-scaled.jpg",
          swipeText: "Love the view",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },

    {
      user_id: 3,
      user_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hbhdm3YOecQ6h_tIx28KLQ84AZbIRlBwJg&usqp=CAU",
      user_name: "Jefferson",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://i.pinimg.com/originals/c9/93/0c/c9930c5004d401be4f30a087c48a0c1e.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://c4.wallpaperflare.com/wallpaper/878/101/200/galaxy-portrait-display-space-vertical-wallpaper-preview.jpg",
          swipeText: "The gardern",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
    {
      user_id: 4,
      user_image:
        "https://i.pinimg.com/474x/f6/61/b3/f661b32c8fea97929cdae1a166f73a4a.jpg",
      user_name: "Shawn Jakes",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://images.pexels.com/photos/2682543/pexels-photo-2682543.jpeg?cs=srgb&dl=pexels-dominika-roseclay-2682543.jpg&fm=jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          swipeText: "Love the view",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },

    {
      user_id: 5,
      user_image:
        "https://t3.ftcdn.net/jpg/03/43/55/84/360_F_343558406_tzgulGVRbnvmISA1MjLzxtYlY4nsrPKb.jpg",
      user_name: "Obey",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://images.pexels.com/photos/1353242/pexels-photo-1353242.jpeg?cs=srgb&dl=pexels-carmen-ong-1353242.jpg&fm=jpg",
          swipeText: "Love the view",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
  ];

  return (
    <>
      <SafeAreaView>
        <Image
          source={require("../assets/images/post_logo.png")}
          style={{ width: 83, height: 18, marginLeft: 8 }}
        />

        <View style={styles.container}>
          <StatusBar style="auto" />
          <InstaStory
            data={data}
            duration={10}
            customSwipeUpComponent={
              <View>
                <Text>Swipe</Text>
              </View>
            }
            unPressedBorderColor={"#1bcc74"}
          />

          <FlatList
            data={feeds.feed}
            contentContainerStyle={{
              paddingBottom: 100,
            }}
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

    marginTop: 10,
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
