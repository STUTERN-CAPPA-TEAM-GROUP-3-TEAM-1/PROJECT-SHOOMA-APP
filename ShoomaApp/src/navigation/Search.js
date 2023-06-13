import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState([]);

  const handleSearch = () => {
    fetchImages();
  };

  const fetchImages = async () => {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?count=20&query=${searchQuery}&client_id=Z-Cj-v0BtWd-MxMm7Y6duuJPCGpM8FEpFBKeAfRW3cM`
    );
    const data = await response.json();
    setImages(data);
  };

  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item.urls.small }} />
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingLeft: 5,

          flexDirection: "row",
          height: 44,

          backgroundColor: "#EDEDED",
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
            height: 40,
            borderColor: "gray",

            paddingHorizontal: 8,
            borderRadius: 5,
            backgroundColor: "#EDEDED",
          }}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onEndEditing={handleSearch}
        />
      </View>

      <FlatList
        data={images}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",

    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: "#EDEDED",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    marginBottom: 5,
    borderRadius: 8,
    marginRight: 2,
  },
});

export default Search;
