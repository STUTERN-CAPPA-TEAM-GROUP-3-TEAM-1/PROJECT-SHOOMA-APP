import React from "react";
import { useState } from "react";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Link } from "@react-navigation/native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

const auth = getAuth();
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  let validateAndSet = (value, setValue) => {
    setValue(value);
  };
  function checkPassword(firstpassword, secondpassword) {
    if (firstpassword !== secondpassword) {
      setValidationMessage("Password do not match");
    } else setValidationMessage(" Password correct");
  }

  async function createAccount() {
    email === "" || password === ""
      ? setValidationMessage("required filled missing")
      : "";
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      sendEmailVerification(auth.currentUser).then(() => {
        alert("Account created! Email verification successfully sent!");
        // ...
      });
    } catch (error) {
      setValidationMessage(error.message);
    }
  }

  return (
    <>
      <SafeAreaView>
        <View>
          <Image
            style={{
              marginTop: 80,
              alignSelf: "center",
              height: 40,
              width: 190,
            }}
            source={require("../assets/Signup_logo.png")}
          />
        </View>

        <View style={{ marginTop: 50, marginLeft: 15, marginBottom: 10 }}>
          <Text
            style={{
              color: "#0C7842",
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 5,
            }}
          >
            Sign Up
          </Text>
          <Text
            style={{
              color: "black",
              width: "70%",
              borderRadius: 5,
              marginBottom: 10,
            }}
          >
            Looks like you dont have an account. {"\n"}
            Let's create an account for you!
          </Text>
        </View>

        <SafeAreaView style={{ marginLeft: 15 }}>
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
              marginBottom: 10,
              marginRight: 25,
              borderStyle: "solid",
            }}
            placeholder="Password"
            value={password}
            onChangeText={(value) => validateAndSet(value, setPassword)}
            secureTextEntry
          />

          <Text style={{ fontWeight: 600 }}> Confirm Password</Text>
          <TextInput
            style={{
              height: 40,
              marginTop: 5,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginRight: 25,
              borderStyle: "solid",
            }}
            placeholder=" Confirm Password"
            value={confirmpassword}
            onChangeText={(value) => validateAndSet(value, setConfirmPassword)}
            secureTextEntry
            onBlur={() => checkPassword(password, confirmpassword)}
          />
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
              marginRight: 20,
              width: "92%",
              alignSelf: "center",
            }}
            onPress={createAccount}
          >
            <Text style={{ color: "#fff", alignSelf: "center" }}>Sign Up</Text>
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Text
            style={{ textAlign: "center", color: "#9D9D9E", marginTop: 15 }}
          >
            {" "}
            OR
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-evenly",
            marginBottom: 10,
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
          style={{
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",

              fontSize: 18,
            }}
          >
            <Text style={{ fontSize: 16 }}>Click </Text>
            <Link
              style={{ color: "#0C7842", fontWeight: "bold", fontSize: 16 }}
              to={{ screen: "Login", params: { id: "log" } }}
            >
              next
            </Link>
            <Text style={{ fontSize: 16 }}>
              {" "}
              if you already have an account
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
