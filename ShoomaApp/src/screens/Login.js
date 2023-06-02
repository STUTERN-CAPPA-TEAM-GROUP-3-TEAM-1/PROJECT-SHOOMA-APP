import React,{ useEffect, useState }from 'react'
import { useNavigation } from '@react-navigation/core'
import { Image, Text, View, TouchableOpacity,SafeAreaView, TextInput} from 'react-native';
import { Link } from '@react-navigation/native';

function Login() {
  return (
    <>
    <View>
      <Image style={{ marginTop: 120, alignSelf: 'center' }} source={require('../assets/Signup_logo.png')} />
    </View>

<View style={{marginTop: 110, marginLeft:15}}>
<Text style={{color:'#0C7842', fontWeight:600, fontSize:20, marginBottom: 10}}>
  Login
</Text>

<SafeAreaView>
  <Text style={{fontWeight: 'bold'}}>Email or Phone numbers</Text>
      <TextInput 
      
      style= {{height: 40,
    
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
  
        <TouchableOpacity >
       <Text style={{textAlign: 'right', fontWeight:'bold', color:'#0C7842'}}>Forgot Password?</Text>
      </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#0C7842', padding: 12, 
        borderRadius: 20,marginTop:10, marginRight:15 }}>
        <Text style={{ color: '#fff', alignSelf: "center"}}>Login</Text>
      </TouchableOpacity>
      </View>
   
<Text style={{textAlign: 'center', color:'#9D9D9E'}}> OR</Text>

<View style={{flexDirection: "row", marginTop:10, justifyContent:'space-evenly'}}>
<TouchableOpacity style={{
                  padding:15,borderRadius:18, backgroundColor: '#CEDCD5', marginTop:15}}>
                  
              <Image
              source={require("../assets/apple-icon.png")}
              style={{ width: 20, height: 25, borderRadius: 7}}
              />
       
      </TouchableOpacity>

      <TouchableOpacity style={{  
                  padding:15, borderRadius:18, 
                  marginTop:15, backgroundColor: '#CEDCD5'}}>
              <Image
              source={require("../assets/google-icon.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        
      </TouchableOpacity>
      <TouchableOpacity style={{
                  padding:15, borderRadius:18, 
              marginTop:15, backgroundColor: '#CEDCD5'}}>
              <Image
              source={require("../assets/Facebook_Logo.png")}
              style={{ width: 20, height: 20, borderRadius: 7}}
              />
        
      </TouchableOpacity>
      </View>

      <View style={{alignSelf: 'center', flexDirection: 'row', marginTop: 10}}>
        <Text>New User? </Text>
        <Link style={{color: '#0C7842'}} to={{ screen: 'Home', params: { id: 'sign' } }}>
      Create an account
    </Link>
      </View>
      </>
)
  
}
export default Login
