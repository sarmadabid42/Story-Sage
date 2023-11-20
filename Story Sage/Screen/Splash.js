

// 

import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    
    const navigateToHome = () => {
      navigation.navigate('Home');
    };

    
    const timeoutId = setTimeout(navigateToHome, 4000);

    
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Screen2.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
       
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  textContainer: {
    position: 'absolute',
    top: 5,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 40,
    marginBottom:0,
  },
});

export default SplashScreen;
