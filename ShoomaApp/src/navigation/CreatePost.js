import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import Icon from "react-native-vector-icons/Ionicons";

const CreatePost = (props) => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);

  const [cameraPermission, setCameraPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [showCamera, setShowCamera] = useState(false);
  const cameraRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const ref = useRef(null);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setCameraPermission(status === "granted");
    })();
  }, []);

  const handleChooseImage = async () => {
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need media library permissions to select an image.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera permissions to take a photo.");
      return;
    }

    setShowCamera(true);
  };

  const handleCameraCapture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      setImage(photo.uri);
      setShowCamera(false);
    }
  };

  const renderCameraView = () => {
    if (!cameraPermission) {
      return <Text>No access to camera</Text>;
    }

    return (
      <Camera style={styles.camera} type={cameraType} ref={cameraRef}>
        <Button title="Take Photo" onPress={handleCameraCapture} />
        <Button
          title="Flip Camera"
          onPress={() =>
            setCameraType(
              cameraType === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
            )
          }
        />
      </Camera>
    );
  };

  const renderImageView = () => {
    if (image) {
      return <Image source={{ uri: image }} style={styles.selectedImage} />;
    }

    return null;
  };

  const handleCreatePost = async () => {
    const newPost = {
      text,
      image,
    };

    // Add the new post to the list of posts
    setPosts([...posts, newPost]);

    // Reset form fields
    setText("");
    setImage(null);
  };

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <Icon name="chevron-back-outline" size={25} color={"black"} />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>New post</Text>
          <TouchableOpacity
            onPress={handleCreatePost}
            style={{
              backgroundColor: "#0C7842",
              borderRadius: 10,
              width: 72,
              height: 30,
            }}
          >
            <Text
              style={{ color: "white", textAlign: "center", paddingTop: 5 }}
            >
              Post
            </Text>
          </TouchableOpacity>
        </View>
        {showCamera ? renderCameraView() : renderImageView()}
        <TextInput
          style={styles.input}
          placeholder="Write Caption..."
          multiline
          value={text}
          onChangeText={setText}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              width: 72,
              height: 30,
              alignItems: "center",
            }}
          >
            <Icon name="pricetag-outline" size={25} color={"#0C7842"} />
            <Text style={{ color: "#979797", fontSize: 12, fontWeight: 100 }}>
              Tag
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              width: 72,
              height: 30,
              alignItems: "center",
            }}
          >
            <Icon name="notifications-outline" size={25} color={"#0C7842"} />
            <Text style={{ color: "#979797", fontSize: 12, fontWeight: 100 }}>
              Reminder
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleChooseImage}
            style={{
              borderRadius: 10,
              width: 72,
              height: 30,
              alignItems: "center",
            }}
          >
            <Icon name="cloud-upload-outline" size={25} color={"#0C7842"} />
            <Text style={{ color: "#979797", fontSize: 12, fontWeight: 100 }}>
              Upload
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleTakePhoto}
            style={{
              borderRadius: 10,
              width: 72,
              height: 30,
              alignItems: "center",
            }}
          >
            <Icon name="camera-outline" size={25} color={"#0C7842"} />
            <Text style={{ color: "#979797", fontSize: 12, fontWeight: 100 }}>
              Camera
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 310 }}>
          <ScrollView>
            <View>
              {posts.map((post, index) => (
                <View key={index} style={styles.postContainer}>
                  {post.image && (
                    <Image
                      source={{ uri: post.image }}
                      style={styles.postImage}
                    />
                  )}
                  <Text style={{ marginLeft: 5, marginTop: 5 }}>
                    {post.text}
                  </Text>
                  <View
                    style={[
                      styles.row,
                      { marginTop: 5, marginLeft: 5, marginRight: 5 },
                    ]}
                  >
                    <View style={styles.rowAtt}>
                      <Icon name="heart-outline" size={20} color={"#0C7842"} />

                      <TouchableOpacity
                        onPress={handleLike}
                        style={styles.likeButton}
                      >
                        <Text
                          style={{
                            marginTop: 2,
                            marginLeft: 5,
                            fontWeight: "bold",
                            color: "#0C7842",
                            fontSize: 12,
                          }}
                        >
                          {isLiked ? "Unlike" : "Like"}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.rowAtt}>
                      <Icon
                        name="chatbubble-outline"
                        size={20}
                        color={"#0C7842"}
                      />
                      <Text
                        style={[
                          {
                            marginTop: 2,
                            marginLeft: 5,
                            fontWeight: "bold",
                            color: "#0C7842",
                            fontSize: 12,
                          },
                        ]}
                      >
                        Comments
                      </Text>
                    </View>
                    <View style={styles.rowAtt}>
                      <Icon
                        name="arrow-redo-outline"
                        size={20}
                        color={"#0C7842"}
                      />
                      <Text
                        style={[
                          {
                            marginTop: 2,
                            marginLeft: 5,
                            fontWeight: "bold",
                            color: "#0C7842",
                            fontSize: 12,
                          },
                        ]}
                      >
                        Share
                      </Text>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 16,
  },
  postContainer: {
    marginTop: 20,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  input: {
    width: "100%",
    height: 120,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 16,
    padding: 8,
    marginTop: 20,
    borderRadius: 10,
  },
  camera: {
    width: "100%",
    height: 300,
  },
  selectedImage: {
    width: "100%",
    height: 300,
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",

    height: 70,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
  },
  rowAtt: {
    flexDirection: "row",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CreatePost;
