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
import { getAuth, signOut, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthentication } from "../hook/useAuthentication";
import Icon from "react-native-vector-icons/Ionicons";

const auth = getAuth();

function Settings() {
  const { user } = useAuthentication();
  const [email, setEmail] = useState("");
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
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          style={{
            width: "50%",
            justifyContent: "flex-start",

            padding: 18,
            flexDirection: "row",
            marginLeft: 15,
          }}
        >
          <Icon name="person-circle-outline" size={20} color={"black"} />

          <Link
            style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
            to={{ screen: "Home", params: { id: "influence" } }}
          >
            Your Account
          </Link>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#DADADA",

            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            width: "50%",

            backgroundColor: "white",
            justifyContent: "flex-start",
            flexDirection: "row",
            padding: 18,
            marginLeft: 15,
          }}
        >
          <Icon name="lock-closed-outline" size={20} color={"black"} />
          <Link
            style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
            to={{ screen: "Home", params: { id: "influence" } }}
          >
            Privacy and Safety
          </Link>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#DADADA",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            width: "50%",

            backgroundColor: "white",
            justifyContent: "flex-start",
            flexDirection: "row",
            padding: 18,
            marginLeft: 15,
          }}
        >
          <Icon name="notifications-outline" size={20} color={"black"} />
          <Link
            style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
            to={{ screen: "Home", params: { id: "influence" } }}
          >
            Notification
          </Link>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#DADADA",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            width: "50%",

            backgroundColor: "white",
            justifyContent: "flex-start",
            flexDirection: "row",
            padding: 18,
            marginLeft: 15,
          }}
        >
          <Icon name="help-circle-outline" size={20} color={"black"} />
          <Link
            style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
            to={{ screen: "Home", params: { id: "influence" } }}
          >
            Help & Support
          </Link>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: "#DADADA",
            marginTop: 4,
            width: "90%",
            alignSelf: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          style={{
            width: "50%",

            backgroundColor: "white",
            justifyContent: "flex-start",
            flexDirection: "row",
            padding: 18,
            marginLeft: 15,
          }}
        >
          <Icon name="alert-circle-outline" size={20} color={"black"} />
          <Link
            style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
            to={{ screen: "Home", params: { id: "influence" } }}
          >
            About
          </Link>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#DADADA",
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
            width: "50%",

            backgroundColor: "white",
            justifyContent: "flex-start",
            flexDirection: "row",
            padding: 18,
            marginLeft: 15,
          }}
        >
          <Icon name="cloud-upload-outline" size={20} color={"black"} />
          <Text style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}>
            Update Password
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderBottomColor: "#DADADA",
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

            backgroundColor: "white",
            justifyContent: "flex-start",
            flexDirection: "row",
            padding: 18,
            marginLeft: 15,
          }}
        >
          <Icon name="log-out-outline" size={20} color={"black"} />
          <Text style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}>
            Sign out
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Settings;
