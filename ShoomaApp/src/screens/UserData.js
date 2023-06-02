import React, {useState} from 'react'
import { Image, Text, View, TouchableOpacity, Button, Alert, SafeAreaView, TextInput } from 'react-native';
import { Link } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


function UserData() {
  const [date, setDate] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date);
    hideDatePicker();
  };

  return (
    <>
    <View>
      <Image style={{ marginTop: 30, alignSelf: 'center', marginBottom:20}} source={require('../assets/logo.png')} />
    </View>

<SafeAreaView style={{marginLeft:15}}>
      <TextInput style= {{height: 45,
    
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 25,
    marginBottom: 10
    
  }}

        placeholder="First name"
        
      />
      
      <TextInput
        style={{height: 45,
          
          borderWidth: 1,
          padding: 10,
        borderRadius: 10,
        marginRight: 25,
        borderStyle:'solid'
        }}

          placeholder="Lastname"
          
      />
      <View style={{flexDirection: "row", marginTop:5, justifyContent:'space-evenly'}}>
<TouchableOpacity style={{
                  padding:15,borderRadius:18, backgroundColor: '#0C7842', marginTop:15, width:'45%'}}>
                  
            
       <Text style={{ color: 'white'}}>Female</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
                  padding:15, borderRadius:18, 
              marginTop:15, backgroundColor: '#16D877', width:'45%', marginRight:18}}>
             <Text style={{ color: 'white'}}>Male</Text>
        
      </TouchableOpacity>
      </View>

      <View >
      
      <TouchableOpacity style={{height: 45,
          
          borderWidth: 1,
          padding: 10,
        borderRadius: 10,
        marginRight: 25,
        borderStyle:'solid', marginTop:15}}
        onPress={showDatePicker}
        
        activeOpacity={0.8}
      >
        <Text style={{color:'#B8B8B8'}}>Your birthday</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      </View>

      <Text style={{color:'#0C7842', fontWeight:'bold', marginTop:30, marginBottom:20}}>Choose your preferred Username and Password</Text>

      <Text style={{fontWeight: 700}}>Username</Text>
      <TextInput style= {{height: 45,
    
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 25
    
  }}

        placeholder="Enter"
        keyboardType="numeric"
      />
      <Text style={{fontWeight: 700}}>Password</Text>
      <TextInput
        style={{height: 45,
          
          borderWidth: 1,
          padding: 10,
        borderRadius: 10,
        marginRight: 25
        }}

          placeholder="Password"
          
      />
    </SafeAreaView>





      <View style={{marginLeft:15, marginRight:15, flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 36}}>
<TouchableOpacity style={{ backgroundColor: '#0C7842', alignSelf:'center', padding: 12, borderRadius: 14,marginTop:10, width: '95%' }}>
        <Link style={{alignSelf: "center", color:'white'}} to={{ screen: 'EmailVerify', params: { id: 'email' } }}>
     Continue
    </Link>
      </TouchableOpacity>

    <View style={{flexDirection: "row", marginBottom:30, marginTop:15}}>
        <Text style={{fontSize:10}}>By completing this registration </Text>
        <Text style={{fontSize:10}}>you agree to shoomas </Text>
        <Link style={{color:'#0C7842', fontWeight:'bold', fontSize:10}} to={{ screen: 'Login', params: { id: 'log' } }}>
         Terms
    </Link>
        <Text style={{fontSize:10}}> of services</Text>
    </View> 

        
      </View>


      </>
      
)



  
}

export default UserData
