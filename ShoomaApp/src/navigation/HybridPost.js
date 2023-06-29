import React from "react";
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Linking,
  ImageBackground,
} from "react-native";
import { Link } from "@react-navigation/native";
import { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import InstaStory from "react-native-insta-story";
import { StatusBar } from "expo-status-bar";

function HybridPost() {
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

  const data = [
    {
      user_id: 1,
      user_image:
        "https://ichef.bbci.co.uk/news/976/cpsprodpb/154EC/production/_102967278_1f1ecc7c-a677-4e9f-838a-317186227aad.jpg",
      user_name: "Mary Daniels",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://cdn.vox-cdn.com/thumbor/yti7UrAkQQuAjmusqpg_mboD8v8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23406204/GettyImages_1346022120.jpg",
          swipeText: "Beautiful world",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://images.theconversation.com/files/223729/original/file-20180619-126566-1jxjod2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        "https://www.popsci.com/uploads/2020/01/07/WMD5M52LJFBEBIHNEEABHVB6LA.jpg?auto=webp&width=1440&height=864",
      user_name: "Ayomide",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://images.unsplash.com/photo-1572359642202-3cc832e60700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW90b3JzcG9ydHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://houseoflor.com/wp-content/uploads/2021/09/pexels-felix-mittermeier-1792626-scaled.jpg",
          swipeText: "Love the view",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },

    {
      user_id: 3,
      user_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6Hbhdm3YOecQ6h_tIx28KLQ84AZbIRlBwJg&usqp=CAU",
      user_name: "Jefferson",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://i.pinimg.com/originals/c9/93/0c/c9930c5004d401be4f30a087c48a0c1e.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://c4.wallpaperflare.com/wallpaper/878/101/200/galaxy-portrait-display-space-vertical-wallpaper-preview.jpg",
          swipeText: "The gardern",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
    {
      user_id: 4,
      user_image:
        "https://i.pinimg.com/474x/f6/61/b3/f661b32c8fea97929cdae1a166f73a4a.jpg",
      user_name: "Shawn Jakes",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://images.pexels.com/photos/2682543/pexels-photo-2682543.jpeg?cs=srgb&dl=pexels-dominika-roseclay-2682543.jpg&fm=jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGwlMjBwbGF5ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
          swipeText: "Love the view",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },

    {
      user_id: 5,
      user_image:
        "https://t3.ftcdn.net/jpg/03/43/55/84/360_F_343558406_tzgulGVRbnvmISA1MjLzxtYlY4nsrPKb.jpg",
      user_name: "Obey",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://images.unsplash.com/photo-1525824236856-8c0a31dfe3be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGVyZmFsbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://images.pexels.com/photos/1353242/pexels-photo-1353242.jpeg?cs=srgb&dl=pexels-carmen-ong-1353242.jpg&fm=jpg",
          swipeText: "Love the view",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
  ];

  return (
    <>
      <View style={{ marginLeft: 10 }}>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../assets/images/post_logo.png")}
            style={{ width: 83, height: 18, marginLeft: 5 }}
          />
        </View>

        <View>
          <View style={styles.container}>
            <StatusBar style="auto" />
            <InstaStory
              data={data}
              duration={10}
              customSwipeUpComponent={
                <View>
                  <Text>Swipe</Text>
                </View>
              }
              unPressedBorderColor={"#1bcc74"}
            />
          </View>
        </View>

        <View style={{ height: 540, marginTop: 5 }}>
          <ScrollView>
            <View>
              <View
                style={{
                  backgroundColor: "#FAFAFA",
                  borderRadius: 10,
                  width: 342,
                  height: 100,
                  marginTop: 15,
                }}
              >
                <TouchableOpacity>
                  <ImageBackground
                    source={require("../assets/images/picpost.png")}
                    style={{ width: 342, height: 243, borderRadius: 10 }}
                  />

                  <View style={[styles.row, { marginTop: 10 }]}>
                    <View style={styles.rowAtt}>
                      <TouchableOpacity>
                        <Icon
                          name="heart-outline"
                          size={20}
                          color={"#0C7842"}
                          marginRight={8}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="chatbubble-outline"
                          size={20}
                          color={"#0C7842"}
                          marginRight={8}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="arrow-redo-outline"
                          size={20}
                          color={"#0C7842"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View>
                <Image
                  source={require("../assets/images/postpic2.png")}
                  style={{
                    width: 33,
                    height: 33,
                    borderRadius: 10,
                    marginLeft: 15,
                  }}
                />
                <Text style={{ color: "white", fontSize: 11, marginLeft: 10 }}>
                  Adesamye
                </Text>
              </View>

              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "row",
                  backgroundColor: "#FAFAFA",
                  borderRadius: 10,
                  marginRight: 10,
                  width: "100%",
                  height: 120,
                  marginTop: 130,
                  marginBottom: 10,
                }}
              >
                <View style={{ marginRight: 5 }}>
                  <Image
                    source={require("../assets/icons/mindpic1.png")}
                    style={{
                      width: 33,
                      height: 33,
                      marginBottom: 5,
                      alignSelf: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center", fontWeight: 500 }}>
                    {" "}
                    Klesanmi.a
                  </Text>
                  <Image
                    source={require("../assets/icons/more.png")}
                    style={{
                      width: 20,
                      height: 4,
                      marginTop: 15,
                      alignSelf: "center",
                    }}
                  />
                </View>

                <View
                  style={{
                    height: "80%",
                    width: 1,
                    backgroundColor: "#909090",
                    marginRight: 5,
                  }}
                ></View>

                <View style={{ width: "75%" }}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: 300 }}>
                      Time is too slow for those who wait, too swift for those
                      who fear, too long for those who grieve, too short for
                      those who rejoice, but for those who love, time is
                      eternity.
                    </Text>
                  </View>

                  <View style={[styles.row]}>
                    <View style={styles.rowAtt}>
                      <TouchableOpacity>
                        <Icon
                          name="heart-outline"
                          size={20}
                          color={"#0C7842"}
                          marginRight={8}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="chatbubble-outline"
                          size={20}
                          color={"#0C7842"}
                          marginRight={8}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="arrow-redo-outline"
                          size={20}
                          color={"#0C7842"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  paddingTop: 10,
                  flexDirection: "row",
                  marginBottom: 10,
                  backgroundColor: "#FAFAFA",
                  borderRadius: 10,
                  marginRight: 10,
                  width: "100%",
                  height: 120,
                  marginTop: 5,
                }}
              >
                <View style={{ marginRight: 5 }}>
                  <Image
                    source={require("../assets/images/postpic1.png")}
                    style={{
                      width: 33,
                      height: 33,
                      marginBottom: 5,
                      alignSelf: "center",
                    }}
                  />
                  <Text style={{ textAlign: "center", fontWeight: 500 }}>
                    {" "}
                    Sunmadea
                  </Text>
                  <Image
                    source={require("../assets/icons/more.png")}
                    style={{
                      width: 20,
                      height: 4,
                      marginTop: 15,
                      alignSelf: "center",
                    }}
                  />
                </View>

                <View
                  style={{
                    height: "80%",
                    width: 1,
                    backgroundColor: "#909090",
                    marginRight: 5,
                  }}
                ></View>

                <View style={{ width: "75%" }}>
                  <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: 300 }}>
                      Sometimes we make the process more complicated than we
                      need to. We will never make a journey of a thousand miles
                      by fretting about how long it will take or how hard it
                      will be.
                    </Text>
                  </View>

                  <View style={[styles.row]}>
                    <View style={styles.rowAtt}>
                      <TouchableOpacity>
                        <Icon
                          name="heart-outline"
                          size={20}
                          color={"#0C7842"}
                          marginRight={8}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="chatbubble-outline"
                          size={20}
                          color={"#0C7842"}
                          marginRight={8}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity>
                        <Icon
                          name="arrow-redo-outline"
                          size={20}
                          color={"#0C7842"}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

export default HybridPost;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 30,
    borderColor: "#0C7842",
    borderWidth: 2,
  },

  postImage: {
    alignSelf: "center",
    width: "98%",
    borderRadius: 20,
    height: 190,
  },

  row: {
    flexDirection: "row",

    justifyContent: "flex-end",
  },

  rowAtt: {
    flexDirection: "row",
  },
});
