import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import CustomBtn from './src/components/CustomBtn';
import CustomInput from './src/components/CustomInput';

const {width, height} = Dimensions.get('window');

const App = () => {
  return (
    <LinearGradient style={styles.container} colors={['#010101', '#33562c']}>
      <SafeAreaView style={styles.wrapper}>
        <Image style={styles.img} source={require('./src/assets/logo1.jpeg')} />
        <Text style={styles.title}>Golden Company</Text>
        <CustomBtn iconName={'apple'} btnTitle={'Sign in with Apple'} />
        <CustomBtn iconName={'google'} btnTitle={'Sign in with Google'} />
        <CustomInput placeholder={'Mail'} />
        <CustomInput placeholder={'Password'} />
        <CustomBtn btnTitle={'Log in'} />
        <Text style={styles.text}>Don't have an account? Create one!</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  wrapper: {
    alignItems: 'center',
    gap: 30,
  },
  img: {
    width: width * 0.7,
    height: width * 0.66,
  },
  text: {
    color: 'lightgray',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#fff',
  },
});
