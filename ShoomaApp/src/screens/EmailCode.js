import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 4;

const EmailCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
<>
    <View style={{ 
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center'}}>

    <SafeAreaView>
      <Text style={{color:'#0C7842', fontWeight:600, fontSize:20, textAlign: 'center', marginBottom: 15 }}>
 You just received a code!
</Text>
<Text style={{color:'black', fontWeight:600, fontSize:15, textAlign: 'center', marginBottom: 20 }}>
Please enter the 4 digit number you {'\n'}received to verify {'\n'}adelabu.olurohunbi@gmail.com</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <Text style={{textAlign:'center', marginTop: 20}}>Didnt receive an email? Resend</Text>
      <TouchableOpacity style={{ backgroundColor: '#0C7842', padding: 12, borderRadius: 20,
        marginTop:20, width: '100%'}}>
        <Text style={{ color: '#fff', alignSelf: "center"}}>Verify</Text>
      </TouchableOpacity>

    </SafeAreaView>
    
    </View>
    </>
  );
};

export default EmailCode;