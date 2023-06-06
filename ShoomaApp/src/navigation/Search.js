import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Search = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData("https://randomuser.me/api/?results=20");
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "Home",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Stack")}
          style={{
            backgroundColor: "purple",
            width: 30,
            height: 30,
            borderRadius: 10,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      ),
      headerSearchBarOptions: {
        placeholder: "Friends",
        onChangeText: (event) => {
          searchFilterFunction(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name.first
          ? item.name.first.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          ></Text>
        </View>
        <View
          style={{
            paddingLeft: 5,
            marginLeft: 5,
            flexDirection: "row",
            height: 44,
            width: "97%",
            backgroundColor: "#EDEDED",
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
          >
            posts from friends
          </TextInput>
        </View>
        <View></View>
        <ScrollView>
          <View style={{ marginTop: 10 }}>
            {filteredData.map((item, index) => {
              return (
                <View key={index} style={styles.itemContainer}>
                  <Image
                    source={{ uri: item.picture.large }}
                    style={styles.image}
                  />
                  <View>
                    <Text style={styles.textName}>
                      {item.name.first} {item.name.last}
                    </Text>
                    <Text style={styles.textEmail}>{item.login.username}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  textFriends: {
    fontSize: 15,
    textAlign: "left",
    marginLeft: 15,

    marginTop: 30,
    backgroundColor: "#EDEDED",
    width: "95%",
    borderRadius: 5,
    height: 40,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  },
});
