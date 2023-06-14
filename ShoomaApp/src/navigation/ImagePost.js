import React, { useState } from "react";
import { View, Button, Image, StyleSheet } from "react-native";
const ImagePost = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            image: selectedImage,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response from the server
      // For example, display a success message or handle errors
      console.log("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleImageSelection = () => {
    // Code to open the image picker and select an image
    // Store the selected image URI in the selectedImage state
  };

  return (
    <View style={styles.container}>
      <Button title="Select Image" onPress={handleImageSelection} />
      <Button title="Upload Image" onPress={handleImageUpload} />
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
export default ImagePost;
