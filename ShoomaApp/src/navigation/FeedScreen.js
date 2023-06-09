import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "@react-navigation/native";

import Icon from "react-native-vector-icons/Ionicons";

const FeedScreen = () => {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);

  const handleCreatePost = () => {
    const newPost = {
      id: Date.now().toString(),
      content: postContent,
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);

    setPostContent("");
  };

  const handleLikePost = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleCommentPost = (postId, comment) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  const handleSharePost = (postId) => {
    const postToShare = posts.find((post) => post.id === postId);
    // Perform share functionality (e.g., share via social media)
    console.log("Share post:", postToShare);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <View style={{ marginTop: 30 }}>
          <Image
            source={require("../assets/images/post_logo.png")}
            style={{ width: 83, height: 18, marginLeft: 5 }}
          />
        </View>
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
              backgroundColor: "#0C7842",
              marginRight: 5,
              width: "23%",
              borderRadius: 3,
              paddingTop: 3,
            }}
          >
            <Text style={{ fontSize: 13, textAlign: "center", color: "white" }}>
              Text Post
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 26,
              backgroundColor: "#rgba(22, 216, 119, 0.1)",
              width: "30%",
              marginRight: 5,
              borderRadius: 3,
              paddingTop: 3,
            }}
          >
            <Link
              style={{ fontSize: 13, textAlign: "center", color: "#04773E" }}
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

        <View style={{ marginTop: 15 }}>
          <Text style={{ fontWeight: 500 }}> Whats on your mind?</Text>
        </View>
        <View
          style={{
            backgroundColor: "#FAFAFA",
            borderRadius: 10,

            width: "97%",
            height: 140,
            marginTop: 10,
            marginLeft: 5,
            marginRight: 20,
          }}
        >
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Image
              source={require("../assets/images/postpic.png")}
              style={{ width: 33, height: 33, marginLeft: 10, marginTop: 10 }}
            />
            <TextInput
              style={{
                fontSize: 12,
                color: "black",
                marginLeft: 5,
              }}
              placeholder="What's on your mind"
              value={postContent}
              onChangeText={setPostContent}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#0C7842",
              borderRadius: 5,
              width: 76,
              height: 24,
              marginLeft: 240,
              marginTop: 40,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}> Post</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.postContainer}>
              <Text
                style={{ fontWeight: 400, marginTop: 10, marginBottom: 10 }}
              >
                What's on everyone's mind?
              </Text>

              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "row",
                  backgroundColor: "#FAFAFA",
                  borderRadius: 10,
                  marginRight: 10,
                  width: "100%",
                  height: 100,
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                <View style={{ marginRight: 5 }}>
                  <Image
                    source={require("../assets/icons/mindpic1.png")}
                    style={{
                      width: 33,
                      height: 33,
                      marginBottom: 5,
                      alignSelf: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center" }}> Klesanmi.a</Text>
                  <Image
                    source={require("../assets/icons/more.png")}
                    style={{
                      width: 20,
                      height: 4,
                      marginTop: 15,
                      alignSelf: "center",
                    }}
                  />
                </View>

                <View
                  style={{
                    height: "80%",
                    width: 1,
                    backgroundColor: "#909090",
                    marginRight: 5,
                  }}
                ></View>

                <View style={{ width: "75%" }}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 12 }}>
                      Time is too slow for those who wait, too swift for those
                      who fear, too long for those who grieve, too short for
                      those who rejoice, but for those who love, time is
                      eternity.
                    </Text>
                  </View>

                  <View style={styles.actionsContainer}>
                    <TouchableOpacity
                      onPress={() => handleLikePost(item.id)}
                      style={{ marginRight: 8 }}
                    >
                      <Icon name="heart-outline" size={15} color={"#0C7842"} />
                      <Text style={{ fontSize: 10 }}>{`(${item.likes})`} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleCommentPost(item.id, "comment")}
                      style={{ marginRight: 8 }}
                    >
                      <Icon
                        name="chatbubble-outline"
                        size={15}
                        color={"#0C7842"}
                      />
                      {item.comments.map((comment, index) => (
                        <Text style={{ fontSize: 10 }} key={index}>
                          {comment}
                        </Text>
                      ))}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSharePost(item.id)}>
                      <Icon
                        name="arrow-redo-outline"
                        size={15}
                        color={"#0C7842"}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "row",
                  marginBottom: 10,
                  backgroundColor: "#FAFAFA",
                  borderRadius: 10,
                  marginRight: 10,
                  width: "100%",
                  height: 100,
                  marginTop: 5,
                }}
              >
                <View style={{ marginRight: 5 }}>
                  <Image
                    source={require("../assets/images/postpic1.png")}
                    style={{
                      width: 33,
                      height: 33,
                      marginBottom: 5,
                      alignSelf: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center" }}> Sunmade</Text>
                  <Image
                    source={require("../assets/icons/more.png")}
                    style={{
                      width: 20,
                      height: 4,
                      marginTop: 15,
                      alignSelf: "center",
                    }}
                  />
                </View>

                <View
                  style={{
                    height: "80%",
                    width: 1,
                    backgroundColor: "#909090",
                    marginRight: 5,
                  }}
                ></View>

                <View style={{ width: "75%" }}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 12 }}>
                      Sometimes we make the process more complicated than we
                      need to. We will never make a journey of a thousand miles
                      by fretting about how long it will take or how hard it
                      will be.
                    </Text>
                  </View>

                  <View style={styles.actionsContainer}>
                    <TouchableOpacity
                      onPress={() => handleLikePost(item.id)}
                      style={{ marginRight: 8 }}
                    >
                      <Icon name="heart-outline" size={15} color={"#0C7842"} />
                      <Text style={{ fontSize: 10 }}>{`(${item.likes})`} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => handleCommentPost(item.id, "comment")}
                      style={{ marginRight: 8 }}
                    >
                      <Icon
                        name="chatbubble-outline"
                        size={15}
                        color={"#0C7842"}
                      />
                      {item.comments.map((comment, index) => (
                        <Text style={{ fontSize: 10 }} key={index}>
                          {comment}
                        </Text>
                      ))}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleSharePost(item.id)}>
                      <Icon
                        name="arrow-redo-outline"
                        size={15}
                        color={"#0C7842"}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 120,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  postContainer: {
    borderColor: "#ccc",
    padding: 8,
  },
  postContent: {
    fontSize: 13,
    marginLeft: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default FeedScreen;
