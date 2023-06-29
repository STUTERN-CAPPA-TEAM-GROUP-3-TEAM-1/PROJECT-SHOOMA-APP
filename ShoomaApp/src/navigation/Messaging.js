import React from "react";

import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { chat } from "../data/chat.json";

const Messaging = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View>
            <View>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 18,
                  fontWeight: "bold",
                  marginBottom: 18,
                  fontSize: 17,
                }}
              >
                Messages
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
                borderRadius: 5,
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
            <View>
              <ScrollView>
                <FlatList
                  data={chat}
                  contentContainerStyle={{ marginTop: 18 }}
                  scrollEnabled={false}
                  renderItem={({ item }) => (
                    <>
                      <TouchableOpacity
                        style={styles.chatItem}
                        onPress={() =>
                          navigation.navigate("Chat", { userName: item.name })
                        }
                      >
                        <Image
                          source={{ uri: item.avatarurl }}
                          style={{
                            width: 50,
                            height: 51,
                            borderRadius: 20,
                            margin: 5,
                            borderColor: "#0C7842",
                            borderWidth: 0,
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
                            <Text style={{ fontSize: 12 }}>{item.lastmsg}</Text>
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
                                  {
                                    marginTop: 20,
                                    fontSize: 11,
                                    marginRight: 8,
                                  },
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
                            marginBottom: 6,
                            alignSelf: "center",
                          }}
                        />
                      </TouchableOpacity>
                    </>
                  )}
                />
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Messaging;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingTop: 25,
    marginLeft: 9,
    marginRight: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "space-between",
  },

  chatItem: {
    flexDirection: "row",
    marginTop: 8,
  },
});
