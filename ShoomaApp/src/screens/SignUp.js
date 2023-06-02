import React from 'react'
import { Image, Text, View, TouchableOpacity, Button, Alert, SafeAreaView, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';

function SignUp() {
  return (
    <>
    <View>
      <Image style={{ marginTop: 110, alignSelf: 'center' }} source={require('../assets/Signup_logo.png')} />
    </View>

<View style={{marginTop: 80, marginLeft:15, marginBottom: 10}}>
<Text style={{color:'#0C7842', fontWeight:600, fontSize:20, marginBottom:10}}>
  Sign Up
</Text>
<Text style={{color:'black', width:'70%', borderRadius:5, marginBottom:10}}>
 Looks like you dont have an account  {'\n'} 
 Let's create an account for you
</Text>
</View>

<SafeAreaView style={{marginLeft:15}}>
  <Text style={{fontWeight: 700}}>Email or Phone number</Text>
      <TextInput style= {{height: 40,
    
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 25
    
  }}

        placeholder="Enter"
        
      />
      <Text style={{fontWeight:700}}>Password</Text>
      <TextInput
        style={{height: 40,
          
          borderWidth: 1,
          padding: 10,
        borderRadius: 10,
        marginRight: 25,
        borderStyle:'solid'
        }}

          placeholder="Password"
          
      />
    </SafeAreaView>
<View>

      <Text style={{textAlign: 'center', color:'#9D9D9E', marginTop:25}}> OR</Text>
      </View>

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

      <View style={{marginLeft:15, marginRight:15, flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 30}}>
    <View style={{flexDirection: "row", alignSelf:'center', marginBottom:10}}>
        <Text>Click </Text>
        <Link style={{color:'#0C7842', fontWeight:'bold'}} to={{ screen: 'Login', params: { id: 'log' } }}>
      next
    </Link>
        <Text> if you already have an account</Text>
    </View> 
        <TouchableOpacity style={{ backgroundColor: '#0C7842', alignSelf:'center', padding: 12, borderRadius: 20,marginTop:10, width: '50%' }}>
        <Link style={{alignSelf: "center", color:'white'}} to={{ screen: 'UserData', params: { id: 'log' } }}>
      Sign up
    </Link>
      </TouchableOpacity>
      </View>


      </>
      
)



  
}

export default SignUp
