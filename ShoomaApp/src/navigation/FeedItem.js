import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import Icon from "react-native-vector-icons/Ionicons";

const FeedItem = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };
  return (
    <View style={styles.feedItem}>
      <View style={styles.feedItemHeader}>
        <View style={{ flexDirection: "row" }}>
          <Image source={{ uri: props.data.avatarurl }} style={styles.avatar} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 12 }}>{props.data.name}</Text>
            <Text style={{ fontSize: 10 }}>{props.data.posttime}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity>
            <Icon
              name="ellipsis-horizontal-outline"
              size={15}
              color={"#0C7842"}
            />
          </TouchableOpacity>
          <Text> </Text>
          <TouchableOpacity>
            <Icon name="close-outline" size={15} color={"#0C7842"} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <Image source={{ uri: props.data.postimg }} style={styles.postImage} />
        <Text style={[{ marginTop: 10, color: "#000000", marginLeft: 5 }]}>
          {props.data.posttext}
        </Text>
        <View
          style={[styles.row, { marginTop: 5, marginLeft: 5, marginRight: 5 }]}
        >
          <View style={styles.rowAtt}>
            <Icon name="heart-outline" size={15} color={"#0C7842"} />

            <TouchableOpacity onPress={handleLike} style={styles.likeButton}>
              <Text
                style={{
                  marginTop: 2,
                  marginLeft: 5,
                  fontWeight: "bold",
                  color: "#0C7842",
                  fontSize: 10,
                }}
              >
                {isLiked ? "Unlike" : "Like"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowAtt}>
            <Icon name="chatbubble-outline" size={15} color={"#0C7842"} />
            <Text
              style={[
                {
                  marginTop: 2,
                  marginLeft: 5,
                  fontWeight: "bold",
                  color: "#0C7842",
                  fontSize: 10,
                },
              ]}
            >
              {props.data.saved} Comments
            </Text>
          </View>
          <View style={styles.rowAtt}>
            <Icon name="arrow-redo-outline" size={15} color={"#0C7842"} />
            <Text
              style={[
                {
                  marginTop: 2,
                  marginLeft: 5,
                  fontWeight: "bold",
                  color: "#0C7842",
                  fontSize: 10,
                },
              ]}
            >
              {props.data.share} Share
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedItem;

const styles = StyleSheet.create({
  feedItem: {
    width: "100%",
    marginBottom: 30,
  },

  feedItemHeader: {
    padding: 10,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: "#0C7842",
    borderWidth: 2,
  },

  postImage: {
    alignSelf: "center",
    width: "99%",
    borderRadius: 10,
    height: 250,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  rowAtt: {
    flexDirection: "row",
  },
});
