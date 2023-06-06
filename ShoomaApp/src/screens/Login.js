import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { firebase } from "firebase/app";

import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Link } from "@react-navigation/native";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

const auth = getAuth();
const Login = () => {
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
    <SafeAreaView>
      <View>
        <Image
          style={{ marginTop: 50, alignSelf: "center", height: 40, width: 190 }}
          source={require("../assets/Signup_logo.png")}
        />
      </View>

      <View style={{ marginTop: 50, marginLeft: 15 }}>
        <Text
          style={{
            color: "#0C7842",
            fontWeight: "bold",
            fontSize: 18,
            marginBottom: 10,
          }}
        >
          Login
        </Text>

        <SafeAreaView>
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Email</Text>
          <TextInput
            style={{
              height: 40,

              borderWidth: 1,
              padding: 10,
              marginBottom: 10,
              borderRadius: 10,
              marginRight: 25,
            }}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={{ fontWeight: 600, marginBottom: 5 }}>Password</Text>
          <TextInput
            style={{
              height: 40,

              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginRight: 25,
            }}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
        </SafeAreaView>
      </View>

      <View style={{ marginLeft: 15, marginRight: 15, marginBottom: 36 }}>
        <TouchableOpacity
          onPress={() => {
            changePassword();
          }}
        >
          <Text
            style={{
              textAlign: "right",
              fontWeight: "bold",
              color: "#0C7842",
              marginTop: 5,
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
        {
          <Text style={{ color: "red", marginTop: 10 }}>
            {validationMessage}
          </Text>
        }
        <TouchableOpacity
          style={{
            backgroundColor: "#0C7842",
            padding: 12,
            borderRadius: 20,
            marginTop: 10,
            marginRight: 15,
          }}
          onPress={signin}
        >
          <Text style={{ color: "#fff", alignSelf: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ textAlign: "center", color: "#9D9D9E" }}> OR</Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 18,
            backgroundColor: "#CEDCD5",
            marginTop: 15,
          }}
        >
          <Image
            source={require("../assets/apple-icon.png")}
            style={{ width: 20, height: 25, borderRadius: 7 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 18,
            marginTop: 15,
            backgroundColor: "#CEDCD5",
          }}
        >
          <Image
            source={require("../assets/google-icon.png")}
            style={{ width: 20, height: 20, borderRadius: 7 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 15,
            borderRadius: 18,
            marginTop: 15,
            backgroundColor: "#CEDCD5",
          }}
        >
          <Image
            source={require("../assets/Facebook_Logo.png")}
            style={{ width: 20, height: 20, borderRadius: 7 }}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ alignSelf: "center", flexDirection: "row", marginTop: 20 }}
      >
        <Text>New User? </Text>
        <Link
          style={{ color: "#0C7842", fontWeight: "bold" }}
          to={{ screen: "SignUp", params: { id: "sign" } }}
        >
          Create an account
        </Link>
      </View>
    </SafeAreaView>
  );
};
export default Login;
