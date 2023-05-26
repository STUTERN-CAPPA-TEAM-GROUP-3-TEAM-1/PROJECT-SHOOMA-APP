import * as React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import { Image, TouchableOpacity, Text, StyleSheet,View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16, color:'white'}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16, color:'#FFFFFF'}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16, color:'#FFFFFF'}}>Done</Text>
  </TouchableOpacity>
);
function OnboardingScreen({navigation}) {
  return (
  
    <Onboarding

    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    
    onSkip={() => navigation.navigate("SignUp")}
    onDone={() => navigation.navigate("SignUp")}
    
  pages={[
    {
      backgroundColor: '#0C7842',
      image: <Image style={{ width: 353,
        height: 660,
        resizeMode: 'cover', marginTop: 52}} source={require('../assets/onboard1.png')} />,
      title: '',
      subtitle: '',
    },
  
    {
      backgroundColor: '#0C7842',
      image: <Image style={{ width: 353,
        height: 660,
        resizeMode: 'cover', marginTop: 52}} source={require('../assets/onboard2.png')} />,
      title: '',
      subtitle: '',
    },
  ]}
/>

  )
  
}

export default OnboardingScreen
