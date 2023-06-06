import * as React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image, TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 14, color: "white" }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 14, color: "#FFFFFF" }}>Done</Text>
  </TouchableOpacity>
);
function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate("SignUp")}
      onDone={() => navigation.navigate("SignUp")}
      pages={[
        {
          backgroundColor: "#0C7842",
          image: (
            <Image
              style={{
                width: "98%",
                height: "98%",
                marginTop: 52,
                borderRadius: 20,
              }}
              source={require("../assets/onboard1.png")}
            />
          ),
          title: "",
          subtitle: "",
        },

        {
          backgroundColor: "#0C7842",
          image: (
            <Image
              style={{
                width: "98%",
                height: "98%",
                marginTop: 52,
                borderRadius: 20,
              }}
              source={require("../assets/onboard2.png")}
            />
          ),
          title: "",
          subtitle: "",
        },
      ]}
    />
  );
}

export default OnboardingScreen;
