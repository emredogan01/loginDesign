import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomBtn = ({iconName, btnTitle}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{btnTitle}</Text>
      <Icon name={iconName} size={25} color={'#010101'} />
    </TouchableOpacity>
  );
};

export default CustomBtn;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#ffbf00',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    height: 45,
    justifyContent: 'center',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
