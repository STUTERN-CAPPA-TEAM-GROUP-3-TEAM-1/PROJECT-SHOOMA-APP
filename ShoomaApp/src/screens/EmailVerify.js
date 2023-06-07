import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Linking,
} from "react-native";
import { Link } from "@react-navigation/native";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth();
const EmailVerify = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationMessage, setvalidationMessage] = useState("");

  async function signin() {
    if (email === "" || password === "") {
      setvalidationMessage("required filled missing");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setvalidationMessage(error.message);
    }
  }

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
        style={{
          alignSelf: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View>
          <Image
            style={{ alignSelf: "center", marginBottom: 40 }}
            source={require("../assets/email.png")}
          />
        </View>

        <View style={{ marginLeft: 15 }}>
          <Text
            style={{
              color: "#0C7842",
              fontWeight: 600,
              fontSize: 20,
              textAlign: "center",
              marginBottom: 15,
            }}
          >
            Enter your email to receive a password reset link
          </Text>
          <TextInput
            style={{
              height: 40,

              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 10,
              marginRight: 25,
              alignSelf: "center",
              width: "90%",
            }}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ marginLeft: 15, marginRight: 15 }}>
          <TouchableOpacity
            onPress={() => {
              changePassword();
            }}
            style={{
              backgroundColor: "#0C7842",
              padding: 12,
              borderRadius: 20,
              marginTop: 10,
              width: "80%",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "white", alignSelf: "center" }}>Submit</Text>
          </TouchableOpacity>
          <View
            style={{ alignSelf: "center", flexDirection: "row", marginTop: 20 }}
          >
            <Link
              style={{ color: "#0C7842", fontWeight: "bold" }}
              to={{ screen: "Login", params: { id: "sign" } }}
            >
              Back to Login
            </Link>
          </View>
        </View>
      </View>
    </>
  );
};

export default EmailVerify;
