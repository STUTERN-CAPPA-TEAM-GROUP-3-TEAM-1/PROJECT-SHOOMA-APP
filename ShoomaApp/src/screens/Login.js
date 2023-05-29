import React from 'react'
import { Image, Text, View, TouchableOpacity, Button, Alert, SafeAreaView, TextInput, StyleSheet, Linking } from 'react-native';


function Login() {
  return (
    <>
    <View>
      <Image style={{ marginTop: 120, alignSelf: 'center' }} source={require('../assets/Signup_logo.png')} />
    </View>

<View style={{marginTop: 110, marginLeft:15}}>
<Text style={{color:'#0C7842', fontWeight:600, fontSize:20 }}>
  Login
</Text>

<SafeAreaView>
  <Text style={{fontWeight: 'bold'}}>Email or Phone numbers</Text>
      <TextInput style= {{height: 40,
    
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 25
    
  }}

        placeholder="Enter"
        keyboardType="numeric"
      />
      <Text style={{fontWeight: 'bold'}}>Password</Text>
      <TextInput
        style={{height: 40,
          
          borderWidth: 1,
          padding: 10,
        borderRadius: 10,
        marginRight: 25
        }}

          placeholder="Password"
          
      />
    </SafeAreaView>
</View>



      

      <View style={{marginLeft:15, marginRight:15, 
  marginBottom: 36}}>
        <Text style={{textAlign: 'right'}}>Forgot Password?</Text>
        <TouchableOpacity style={{ backgroundColor: '#0C7842', padding: 12, 
        borderRadius: 20,marginTop:10, marginRight:15 }}>
        <Text style={{ color: '#fff', alignSelf: "center"}}>Login</Text>
      </TouchableOpacity>
      </View>
   
<Text style={{textAlign: 'center', color:'#9D9D9E'}}> OR</Text>

<View style={{flexDirection: "row"}}>
<View style={{  
                  padding:12, flexDirection: "row", 
                  borderColor: 'black', borderStyle: 'solid', marginTop:15}}>
              <Image
              source={require("../assets/apple-icon.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        <Text style={{ color: 'black', fontWeight: 600, marginLeft:8}}>Login with Apple</Text>
      </View>

      <View style={{  
                  padding:12, flexDirection: "row", 
                  borderColor: 'black', borderStyle: 'solid', marginTop:15}}>
              <Image
              source={require("../assets/google-icon.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        <Text style={{ color: 'black', fontWeight: 600, marginLeft:8}}>Login with Google</Text>
      </View>

      </View>
      
      <View>
        <Text style={{textAlign:'center', marginTop:10}}>New User? Create an account</Text>
      </View>

      </>
    
    

)



  
}

export default Login
