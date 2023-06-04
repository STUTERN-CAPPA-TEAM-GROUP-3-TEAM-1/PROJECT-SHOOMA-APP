import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Linking,
  ImageBackground,
} from "react-native";
import { Link } from "@react-navigation/native";

function PicturePost() {
  return (
    <>
      <View style={{ marginLeft: 10 }}>
        <View style={{ marginTop: 30 }}>
          <Image
            source={require("../assets/images/post_logo.png")}
            style={{ width: 83, height: 18, borderRadius: 7 }}
          />
        </View>

        <View>
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity style={{ marginRight: 4 }}>
                <Image
                  source={require("../assets/images/post1.png")}
                  style={{ width: 62, height: 63 }}
                />
                <Text style={{ fontSize: 11, color: "#B7B7B7" }}>
                  Your story
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 4 }}>
                <Image
                  source={require("../assets/images/post2.png")}
                  style={{ width: 62, height: 63 }}
                />
                <Text style={{ fontSize: 11, color: "#7A7A7A" }}>
                  Kiesanmi.a
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 4 }}>
                <Image
                  source={require("../assets/images/post3.png")}
                  style={{ width: 62, height: 63 }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    color: "#7A7A7A",
                    textAlign: "center",
                  }}
                >
                  Ada.xo
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ marginRight: 4 }}>
                <Image
                  source={require("../assets/images/post4.png")}
                  style={{ width: 62, height: 63 }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    color: "#7A7A7A",
                    textAlign: "center",
                  }}
                >
                  Aderoju.x
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginRight: 4 }}>
                <Image
                  source={require("../assets/images/post5.png")}
                  style={{ width: 62, height: 63 }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    color: "#7A7A7A",
                    textAlign: "center",
                  }}
                >
                  Sunmade
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/post3.png")}
                  style={{ width: 62, height: 63 }}
                />
                <Text
                  style={{
                    fontSize: 11,
                    color: "#7A7A7A",
                    textAlign: "center",
                  }}
                >
                  Dan.xo
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <View
            style={{ flexDirection: "row", marginTop: 20, alignSelf: "center" }}
          >
            <TouchableOpacity
              style={{
                height: 20,
                backgroundColor: "#rgba(22, 216, 119, 0.1)",
                marginRight: 5,
                width: "23%",
                borderRadius: 3,
                fontSize: 8,
              }}
            >
              <Link
                style={{ fontSize: 12, textAlign: "center", color: "#04773E" }}
                to={{ screen: "Post", params: { id: "influence" } }}
              >
                Text Posts
              </Link>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 20,
                backgroundColor: "#16D877",
                width: "30%",
                marginRight: 5,
                borderRadius: 3,
                fontSize: 8,
              }}
            >
              <Link
                style={{ fontSize: 12, textAlign: "center", color: "white" }}
                to={{ screen: "PicturePost", params: { id: "influence" } }}
              >
                Picture Posts
              </Link>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 20,
                backgroundColor: "#rgba(22, 216, 119, 0.1)",
                width: "30%",
                borderRadius: 3,
                fontSize: 8,
              }}
            >
              <Link
                style={{ fontSize: 12, textAlign: "center", color: "#04773E" }}
                to={{ screen: "HybridPost", params: { id: "influence" } }}
              >
                Hybrid Posts
              </Link>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "column" }}>
          <View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FAFAFA",
                borderRadius: 10,
                width: 342,
                height: 100,
                marginTop: 15,
                marginBottom: 10,
              }}
            >
              <TouchableOpacity>
                <ImageBackground
                  source={require("../assets/images/picpost.png")}
                  style={{ width: 342, height: 243, borderRadius: 10 }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={require("../assets/images/postpic2.png")}
                style={{
                  width: 33,
                  height: 33,
                  borderRadius: 10,
                  marginLeft: 15,
                }}
              />
              <Text style={{ color: "white", fontSize: 11, marginLeft: 10 }}>
                Adesamye
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#FAFAFA",
                borderRadius: 10,
                width: 342,
                height: 100,
                marginTop: 200,
                marginBottom: 10,
              }}
            >
              <TouchableOpacity>
                <ImageBackground
                  source={require("../assets/images/picpost2.png")}
                  style={{ width: 342, height: 243, borderRadius: 10 }}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Image
                source={require("../assets/images/postpic3.png")}
                style={{
                  width: 33,
                  height: 33,
                  borderRadius: 10,
                  marginLeft: 15,
                }}
              />
              <Text style={{ color: "white", fontSize: 11, marginLeft: 10 }}>
                Sunmade
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}

export default PicturePost;
