import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Modal,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { imagesDataURL } from "../data/data";

const ProfileEdit = ({ navigation }) => {
  const [name, setName] = useState("Mary Magdelene");
  const [email, setEmail] = useState("mwachimba@gmail.com");
  const [password, setPassword] = useState("randompassword");
  const [country, setCountry] = useState("Nigeria");

  const [selectedImage, setSelectedImage] = useState(imagesDataURL[0]);

  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,

        paddingHorizontal: 22,
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Edit Profile</Text>
      </View>

      <ScrollView>
        <View
          style={{
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <TouchableOpacity onPress={handleImageSelection}>
            <Image
              source={{ uri: selectedImage }}
              style={{
                height: 150,
                width: 150,
                borderRadius: 85,
                borderWidth: 2,
              }}
            />

            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons name="photo-camera" size={32} />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Name</Text>
            <View
              style={{
                height: 44,
                width: "100%",

                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Email</Text>
            <View
              style={{
                height: 44,

                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text>Password</Text>
            <View
              style={{
                height: 44,
                width: "100%",

                borderWidth: 1,
                borderRadius: 10,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>
          <TouchableOpacity
            style={{
              height: 44,
              width: "100%",

              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              marginRight: 25,
              borderStyle: "solid",
              marginTop: 15,
            }}
            onPress={showDatePicker}
            activeOpacity={0.8}
          >
            <Text style={{ color: "#B8B8B8" }}>Your birthday</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
            marginTop: 15,
          }}
        >
          <Text>Country</Text>
          <View
            style={{
              height: 44,
              width: "100%",

              borderWidth: 1,
              borderRadius: 10,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
            }}
          >
            <TextInput
              value={country}
              onChangeText={(value) => setCountry(value)}
              editable={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            height: 44,
            borderRadius: 15,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0C7842",
            alignSelf: "center",
            width: "80%",
          }}
        >
          <Text style={{ color: "white" }}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileEdit;
