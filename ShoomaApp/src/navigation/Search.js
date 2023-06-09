import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

const Search = () => {
  const [postContent, setPostContent] = useState("");
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleCreatePost = () => {
    const newPost = {
      id: Date.now().toString(),
      content: postContent,
      likes: 0,
      comments: [],
    };

    setPosts([newPost, ...posts]);
    setFilteredPosts([newPost, ...filteredPosts]);

    setPostContent("");
  };

  const handleSearch = () => {
    const filtered = posts.filter((post) =>
      post.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
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

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your post"
        value={postContent}
        onChangeText={setPostContent}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Create Post" onPress={handleCreatePost} />

      <TextInput
        style={styles.input}
        placeholder="Search posts"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.postContent}>{item.content}</Text>
            <View style={styles.actionsContainer}>
              <Button
                title={`Like (${item.likes})`}
                onPress={() => handleLikePost(item.id)}
              />
              <Button
                title="Comment"
                onPress={() => handleCommentPost(item.id, "New comment")}
              />
            </View>
            <View>
              {item.comments.map((comment, index) => (
                <Text key={index}>{comment}</Text>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  postContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 8,
  },
  postContent: {
    fontSize: 16,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
});

export default Search;
