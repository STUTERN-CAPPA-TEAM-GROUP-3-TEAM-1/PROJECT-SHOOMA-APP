import { Text, View } from 'react-native'
import React, { Component } from 'react'

function HomeImage() {

    return (
      <View>
<View style={{flexDirection:"row", justifyContent:'space-evenly', marginTop:10}}>
        <TouchableOpacity >
        <Image
              source={require("../assets/images/home8.png")}
              style={{ width: 110, height: 118, borderRadius:30}}
              />
        </TouchableOpacity>
        <TouchableOpacity >
        <Image
              source={require("../assets/images/home7.png")}
              style={{ width: 110, height: 118 }}
              />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Image
              source={require("../assets/images/home2.png")}
              style={{ width: 110, height: 118}}
              />
        </TouchableOpacity>

              </View>

              <View style={{flexDirection:"row", justifyContent:'space-evenly', marginTop:10}}>
        <TouchableOpacity >
        <Image
              source={require("../assets/images/home3.png")}
              style={{ width: 110, height: 118, borderRadius:30}}
              />
        </TouchableOpacity>
        <TouchableOpacity >
        <Image
              source={require("../assets/images/home4.png")}
              style={{ width: 110, height: 118 }}
              />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Image
              source={require("../assets/images/home10.png")}
              style={{ width: 110, height: 118}}
              />
        </TouchableOpacity>

              </View>

              <View style={{flexDirection:"row", justifyContent:'space-evenly', marginTop:10}}>
        <TouchableOpacity >
        <Image
              source={require("../assets/images/home9.png")}
              style={{ width: 110, height: 118, borderRadius:30}}
              />
        </TouchableOpacity>
        <TouchableOpacity >
        <Image
              source={require("../assets/images/home5.png")}
              style={{ width: 110, height: 118 }}
              />
        </TouchableOpacity>
        <TouchableOpacity> 
        <Image
              source={require("../assets/images/home6.png")}
              style={{ width: 110, height: 118}}
              />
        </TouchableOpacity>

              </View>
              </View>
    )
  }


export default HomeImage