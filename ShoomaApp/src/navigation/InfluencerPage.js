import {
  View,
  Text,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
  ScrollView,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

function InfluencerPage() {
  return (
    <>
      <View>
        <Text
          style={{ textAlign: "center", marginTop: 40, fontWeight: "bold" }}
        >
          Mary.xo
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 10,
        }}
      >
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#0C7842", fontSize: 13 }}>Followers</Text>
          <Text style={{ fontWeight: "bold" }}>5670</Text>
        </View>

        <View>
          <Image
            source={require("../assets/images/profilepic.png")}
            style={{ width: 97, height: 104, borderRadius: 30 }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#0C7842", fontSize: 13 }}>Following</Text>
          <Text style={{ fontWeight: "bold" }}>1200</Text>
        </View>
      </View>

      <View style={{ alignSelf: "center", marginTop: 10 }}>
        <Text
          style={{
            fontWeight: "bold",
            marginBottom: 10,
            fontSize: 15,
            textAlign: "center",
          }}
        >
          Mary Magdalene
        </Text>
        <Text style={{ fontWeight: "400", fontSize: 13, textAlign: "center" }}>
          Content Creator
        </Text>
      </View>

      <View>
        <TouchableOpacity
          style={{
            marginTop: 10,
            width: "65%",
            alignSelf: "center",
            backgroundColor: "#DADEDF",
            padding: 8,
            borderRadius: 10,
            fontSize: 8,
          }}
        >
          <Text style={{ fontSize: 11, textAlign: "center" }}>
            304K accounts reached in the last 30 days.
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#DADEDF",
            width: "30%",
            padding: 8,
            borderRadius: 10,
            fontSize: 8,
          }}
        >
          <Text style={{ fontSize: 11, textAlign: "center" }}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#DADEDF",
            width: "30%",
            padding: 8,
            borderRadius: 10,
            fontSize: 8,
          }}
        >
          <Text style={{ fontSize: 11, textAlign: "center" }}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#DADEDF",
            width: "30%",
            padding: 8,
            borderRadius: 10,
            fontSize: 8,
          }}
        >
          <Text style={{ fontSize: 11, textAlign: "center" }}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/images/pic.png")}
            style={{ width: 18, height: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/video.png")}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/content.png")}
            style={{ width: 16, height: 16 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          borderBottomColor: "#A6A6A6",
          marginTop: 4,
          width: "90%",
          alignSelf: "center",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home8.png")}
              style={{ width: 110, height: 118, borderRadius: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home7.png")}
              style={{ width: 110, height: 118 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home2.png")}
              style={{ width: 110, height: 118 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home3.png")}
              style={{ width: 110, height: 118, borderRadius: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home4.png")}
              style={{ width: 110, height: 118 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home10.png")}
              style={{ width: 110, height: 118 }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 10,
          }}
        >
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home9.png")}
              style={{ width: 110, height: 118, borderRadius: 30 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home5.png")}
              style={{ width: 110, height: 118 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/images/home6.png")}
              style={{ width: 110, height: 118 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

export default InfluencerPage;
