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
  Share,
  Modal,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Link } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { useAuthentication } from "../hook/useAuthentication";
import Icon from "react-native-vector-icons/Ionicons";

const auth = getAuth();

function ProfileView() {
  const { user } = useAuthentication();
  const handleShareProfile = async () => {
    try {
      const shareOptions = {
        message: "Check out my profile!",
        url: "https://example.com/profile", // Replace with the actual profile URL
      };

      await Share.share(shareOptions);
    } catch (error) {
      console.error(error);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: "white",
                height: "55%",
                borderTopRightRadius: 40,
                borderTopLeftRadius: 40,
              }}
            >
              <View>
                <TouchableOpacity
                  style={{ alignSelf: "flex-end", marginRight: 15 }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Icon name="close-outline" size={30} color={"#0C7842"} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={{
                  width: "50%",
                  justifyContent: "flex-start",

                  padding: 12,
                  flexDirection: "row",
                  marginLeft: 15,
                }}
              >
                <Icon name="person-circle-outline" size={20} color={"black"} />

                <Link
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                  to={{ screen: "ProfileView", params: { id: "influence" } }}
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
                  padding: 12,
                  marginLeft: 15,
                }}
              >
                <Icon name="lock-closed-outline" size={20} color={"black"} />
                <Link
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                  to={{ screen: "ProfileView", params: { id: "influence" } }}
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
                  padding: 12,
                  marginLeft: 15,
                }}
              >
                <Icon name="notifications-outline" size={20} color={"black"} />
                <Link
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                  to={{ screen: "ProfileView", params: { id: "influence" } }}
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
                  padding: 12,
                  marginLeft: 15,
                }}
              >
                <Icon name="help-circle-outline" size={20} color={"black"} />
                <Link
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                  to={{ screen: "ProfileView", params: { id: "influence" } }}
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
                  padding: 12,
                  marginLeft: 15,
                }}
              >
                <Icon name="alert-circle-outline" size={20} color={"black"} />
                <Link
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                  to={{ screen: "ProfileView", params: { id: "influence" } }}
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
                style={{
                  width: "50%",

                  backgroundColor: "white",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  padding: 12,
                  marginLeft: 15,
                }}
              >
                <Icon name="cloud-upload-outline" size={20} color={"black"} />
                <Link
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                  to={{ screen: "ProfileView", params: { id: "influence" } }}
                >
                  Update Password
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
                onPress={() => signOut(auth)}
                style={{
                  width: "50%",

                  backgroundColor: "white",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  padding: 12,
                  marginLeft: 15,
                }}
              >
                <Icon name="log-out-outline" size={20} color={"black"} />
                <Text
                  style={{ fontSize: 14, textAlign: "center", marginLeft: 15 }}
                >
                  Sign out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={{ alignSelf: "flex-end", marginRight: 15 }}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="menu-outline" size={30} color={"#0C7842"} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 15,
        }}
      >
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#0C7842", fontSize: 15 }}>Followers</Text>
          <Text style={{ fontWeight: "bold" }}>5670</Text>
        </View>

        <View>
          <Image
            source={require("../assets/images/profilepic.png")}
            style={{ width: 97, height: 104, borderRadius: 30 }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ color: "#0C7842", fontSize: 15 }}>Following</Text>
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

      <View>
        <TouchableOpacity
          style={{
            marginTop: 15,
            width: "85%",
            alignSelf: "center",
            backgroundColor: "#DADEDF",
            padding: 9,
            borderRadius: 10,
            fontSize: 8,
          }}
        >
          <Text style={{ fontSize: 13, textAlign: "center" }}>
            304K accounts reached in the last 30 days.
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 26,
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
          <Link
            style={{ fontSize: 13, textAlign: "center" }}
            to={{ screen: "ProfileEdit", params: { id: "influence" } }}
          >
            Edit Profile
          </Link>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleShareProfile}
          style={{
            backgroundColor: "#DADEDF",
            width: "30%",
            padding: 8,
            borderRadius: 10,
            fontSize: 8,
          }}
        >
          <Text style={{ fontSize: 13, textAlign: "center" }}>
            Share Profile
          </Text>
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
          <Text style={{ fontSize: 13, textAlign: "center" }}>
            Profile Views
          </Text>
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
            source={require("../assets/images/pic.png")}
            style={{ width: 18, height: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/edit.png")}
            style={{ width: 18, height: 18 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/images/download.png")}
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
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",

    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
export default ProfileView;
