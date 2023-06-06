import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { chat } from "../data/chat.json";

const Messaging = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text
              style={{
                textAlign: "center",
                marginTop: 20,
                fontWeight: "bold",
                marginBottom: 20,
                fontSize: 15,
              }}
            >
              Chats
            </Text>
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
              placeholder="Search"
            />
          </View>
          <FlatList
            data={chat}
            contentContainerStyle={{ paddingBottom: 10, marginTop: 20 }}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity style={styles.chatItem}>
                  <Image
                    source={{ uri: item.avatarurl }}
                    style={{
                      width: 62,
                      height: 63,
                      borderRadius: 20,
                      margin: 5,
                      borderColor: "grey",
                      borderWidth: 2,
                    }}
                  />

                  <View
                    style={{
                      marginLeft: 10,
                      width: "65%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <Text
                        style={[
                          {
                            color: "#000000",
                            fontWeight: "bold",
                            marginTop: 10,
                          },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Text>{item.lastmsg}</Text>
                    </View>
                    <View>
                      {item.lastonline === "RN" ? (
                        <Text
                          style={{
                            backgroundColor: "#0C7842",
                            width: 8,
                            height: 8,
                            marginTop: 26,
                            borderRadius: 50,
                            marginRight: 5,
                          }}
                        ></Text>
                      ) : (
                        <Text
                          style={[
                            { marginTop: 25, fontSize: 11, marginRight: 5 },
                          ]}
                        >
                          {item.lastonline}
                        </Text>
                      )}
                    </View>
                  </View>
                  <Image
                    source={require("../assets/images/phototake.png")}
                    style={{
                      width: 24,
                      height: 20,
                      marginBottom: 10,
                      alignSelf: "center",
                    }}
                  />
                </TouchableOpacity>
              </>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Messaging;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    backgroundColor: "#ffffff",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },

  chatItem: {
    flexDirection: "row",
    marginTop: 5,
  },
});
