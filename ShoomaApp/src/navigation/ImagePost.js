import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

const ImagePost = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [newPostImage, setNewPostImage] = useState(null);

  const handlePost = () => {
    const newPost = { text: newPostText, image: newPostImage };
    setPosts([newPost, ...posts]);
    setNewPostText("");
    setNewPostImage(null);
  };

  const handleImageSelection = () => {
    // Implement image selection logic here, such as using Image Picker library
    // Set the selected image URI to newPostImage state
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postContainer}>
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.postImage} />
      )}
      <Text>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.newPostContainer}>
        <TextInput
          style={styles.newPostInput}
          placeholder="Write a post..."
          value={newPostText}
          onChangeText={setNewPostText}
        />
        <TouchableOpacity
          style={styles.imageButton}
          onPress={handleImageSelection}
        >
          <Text>Select Image</Text>
        </TouchableOpacity>
        <Button title="Post" onPress={handlePost} disabled={!newPostText} />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPostItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  newPostContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  newPostInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
  },
  imageButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  postContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
  },
  postImage: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});

export default ImagePost;
