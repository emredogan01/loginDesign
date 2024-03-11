import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const CustomInput = ({placeholder}) => {
  return (
    <TextInput
      placeholderTextColor={'#fff'}
      placeholder={placeholder}
      style={styles.input}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    color: 'lightgray',
    width: '100%',
    borderBottomWidth: 3,
    borderColor: '#fff',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 1,
    paddingVertical: 10,
  },
});
