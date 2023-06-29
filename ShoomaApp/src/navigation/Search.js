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
      <View style={{ backgroundColor: "white" }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.searchInput}
              placeholder="Type..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity style={styles.button} onPress={handleSearch}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 30,
  },

  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    width: "80%",
  },
  button: {
    backgroundColor: "#0C7842",
    padding: 7,
    alignSelf: "flex-end",
    borderRadius: 10,
    marginBottom: 16,
    width: "20%",
    marginLeft: 5,
    height: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,

    textAlign: "center",
  },
  image: {
    width: "50%",
    aspectRatio: 1,
    marginBottom: 5,
    marginLeft: 3,
    borderRadius: 4,
  },
});

export default Search;
