import React from 'react'
import { Dimensions, Image, Text, View, TouchableOpacity, Button, Alert, SafeAreaView, TextInput, StyleSheet, Linking } from 'react-native';


function Search() {
  return (
    <>
    <View style={{ height: Dimensions.get('screen').height,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    marginLeft:10,
    marginRight:10 }}>

       
    
   <View style={{paddingLeft:5, marginLeft:5, marginTop: 50,flexDirection:'row', height:44, width:'97%', backgroundColor:'#EDEDED'}}>
         <Image
              source={require("../assets/icons/searchicon.png")}
              style={{ width: 15, height: 15, alignSelf:'center'}}
              />
         <TextInput
        style={{fontSize:14, color:'#656663', textAlign:'center', marginLeft: 5}}
        placeholder="Search"
      
      />
         </View>

         
         </View>
      </>
    
    

)



  
}

export default Search
