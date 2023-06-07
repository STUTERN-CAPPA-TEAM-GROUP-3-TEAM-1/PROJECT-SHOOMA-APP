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
  Button,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Link } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { useAuthentication } from "../hook/useAuthentication";

const auth = getAuth();

function Profile() {
  const { user } = useAuthentication();
  function changePassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  return (
    <>
      <View
        style={{ textAlign: "center", marginTop: 60, fontWeight: "bold" }}
      ></View>

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
          UI/UX Designer
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          height: "65%",
          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          marginTop: 10,
          borderColor: "#0C7842",
          borderWidth: 2,
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            alignSelf: "center",
            backgroundColor: "white",

            padding: 30,
          }}
        >
          <Link
            style={{ fontSize: 16, textAlign: "center" }}
            to={{ screen: "Home", params: { id: "influence" } }}
          >
            My Profile
          </Link>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#A6A6A6",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />

        <TouchableOpacity
          style={{
            width: "50%",
            alignSelf: "center",
            backgroundColor: "white",

            padding: 30,
          }}
        >
          <Link
            style={{ fontSize: 16, textAlign: "center" }}
            to={{ screen: "InfluencerPage", params: { id: "influence" } }}
          >
            Edit Profile
          </Link>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "#A6A6A6",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            width: "50%",
            alignSelf: "center",
            backgroundColor: "white",

            padding: 30,
          }}
        >
          <Link
            style={{ fontSize: 16, textAlign: "center" }}
            to={{ screen: "InfluencerPage", params: { id: "influence" } }}
          >
            Share Profile
          </Link>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#A6A6A6",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            changePassword();
          }}
          style={{
            width: "60%",
            alignSelf: "center",
            backgroundColor: "white",

            padding: 30,
          }}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>
            Update Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#A6A6A6",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          onPress={() => signOut(auth)}
          style={{
            width: "50%",
            alignSelf: "center",
            backgroundColor: "white",

            padding: 30,
          }}
        >
          <Text style={{ fontSize: 16, textAlign: "center" }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Profile;
