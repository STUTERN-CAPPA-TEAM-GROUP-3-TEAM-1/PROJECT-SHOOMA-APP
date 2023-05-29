import React from 'react'
import { Image, Text, View, TouchableOpacity, Button, Alert } from 'react-native';
import { Link } from '@react-navigation/native';

function SignUp() {
  return (
    <>
    <View>
      <Image style={{ marginTop: 120, alignSelf: 'center' }} source={require('../assets/Signup_logo.png')} />
    </View>

<View style={{marginTop: 110, marginLeft:15}}>
<Text style={{color:'#0C7842', fontWeight:600, fontSize:20 }}>
  Sign Up
</Text>
<Text>
 Looks like you dont have an account  {'\n'} 
 Let's create an account for you
</Text>
</View>

      <View style={{marginTop:15, marginLeft:15, marginRight:15}}>
                  <TouchableOpacity style={{ backgroundColor: 'white', 
                  padding:12, flexDirection: "row", borderRadius:15, 
                  borderColor: 'black', borderStyle: 'solid'}}>
              <Image
              source={require("../assets/apple-icon.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        <Text style={{ color: 'black', fontWeight: 600, marginLeft:8}}>Sign up with Apple</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ backgroundColor: 'white', 
                  padding:12, flexDirection: "row", borderRadius:15, 
                  borderColor: 'black', borderStyle: 'solid', marginTop:15}}>
              <Image
              source={require("../assets/google-icon.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        <Text style={{ color: 'black', fontWeight: 600, marginLeft:8}}>Sign up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', 
                  padding:12, flexDirection: "row", borderRadius:15, 
                  borderColor: 'black', borderStyle: 'solid', marginTop:15}}>
              <Image
              source={require("../assets/Facebook_Logo.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        <Text style={{ color: 'black', fontWeight: 600, marginLeft:8}}>Sign up with Facebook</Text>
      </TouchableOpacity>
      

      </View>

      

      <View style={{marginLeft:15, marginRight:15, flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36}}>
        <Text style={{alignSelf: "center"}}>Click Next if you already have an account</Text>
        <TouchableOpacity style={{ backgroundColor: '#0C7842', alignSelf:'center', padding: 12, borderRadius: 20,marginTop:10, width: '50%' }}>
        <Link style={{alignSelf: "center", color:'white'}} to={{ screen: 'Login', params: { id: 'jane' } }}>
      Next
    </Link>
      </TouchableOpacity>
      </View>


      </>
      
)



  
}

export default SignUp
