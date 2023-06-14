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
import { SafeAreaView } from "react-native-safe-area-context";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=Z-Cj-v0BtWd-MxMm7Y6duuJPCGpM8FEpFBKeAfRW3cM`
    )
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.log("Error fetching images:", error);
      });
  };

  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item.urls.thumb }} />
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },

  searchInput: {
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0C7842",
    padding: 12,
    alignItems: "center",
    borderRadius: 4,
    marginBottom: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    marginBottom: 5,
    borderRadius: 5,
    marginLeft: 4,
  },
});

export default Search;
