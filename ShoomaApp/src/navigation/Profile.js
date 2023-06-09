import React from "react";
import { View, Text, Button, Share, StyleSheet } from "react-native";

const Profile = () => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.profileText}>User Profile</Text>
      <Button title="Share Profile" onPress={handleShareProfile} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    fontSize: 20,
    marginBottom: 16,
  },
});

export default Profile;
