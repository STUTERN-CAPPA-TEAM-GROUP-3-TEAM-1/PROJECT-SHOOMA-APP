import React from 'react'
import { Image, Text, View, TouchableOpacity, Button, Alert, SafeAreaView, TextInput, StyleSheet, Linking } from 'react-native';
import { Link } from '@react-navigation/native';

function EmailVerify() {
  return (
    <>
    <View style={{ 
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center'}}>
    <View>
      <Image style={{alignSelf: 'center', marginBottom: 40 }} source={require('../assets/email.png')} />
    </View>

<View style={{marginLeft:15}}>
<Text style={{color:'#0C7842', fontWeight:600, fontSize:20, textAlign: 'center', marginBottom: 15 }}>
  Email Verification
</Text>
<Text style={{color:'black', fontWeight:600, fontSize:15, textAlign: 'center', marginBottom: 20 }}>
  It's important you are identified as  {'\n'}a real human
</Text>
</View>
      <View style={{marginLeft:15, marginRight:15}}>
   
        <TouchableOpacity style={{ backgroundColor: '#0C7842', padding: 12, borderRadius: 20,
        marginTop:10, width: '100%'}}>
    
        <Link style={{color:'white', alignSelf: 'center'}} to={{ screen: 'EmailCode', params: { id: 'code' } }}>
         Next
    </Link>
      </TouchableOpacity>
      </View>

      </View>
      </>
    
    

)
  
}

export default EmailVerify
