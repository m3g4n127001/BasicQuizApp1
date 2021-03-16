
import React from 'react'

import {View, Text, TouchableOpacity, StyleSheet, Image,  } from 'react-native'
const StartPage = () => {
    return (
      <View style={styles.container}>
          <View style={styles.welcome}>
              <Text style={styles.header}>Welcome to basic Quiz App</Text>
          </View>
          <Image style={styles.imagehi} source={require('../assets/hi1.png')}/>
          <View style={styles.start}>
          <TouchableOpacity onPress={console.log('hello world')} style={styles.startbut} color='pink' activeOpacity={0.5}>
              <Text style={styles.buttext}>Start Quiz</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
  
      container: {
          flex:2,
          backgroundColor: '#fff',
          alignItems: 'center',
      },
      welcome: {
          backgroundColor: 'pink',
          height: '50%',
          width:'100%',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius: 10,
      },
  
      header: {
          fontSize: 50,
          color: 'white',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: 'bold',
          textShadowOffset : {
              width:2,
              height:4,
          },
          textShadowColor:'#ff6666',
          textShadowRadius: 5,
          shadowOpacity:0.3
      },
      start: {
          backgroundColor: '#fff7f8',
          height:400,
          width: '100%',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
      },
      startbut: {
          height: 60,
          width: 160,
          alignContent: 'center',
          backgroundColor: 'pink',
          justifyContent: 'center',
          borderRadius:7,
         // activeOpacity:0.4,
      },
      buttext: {
          fontSize: 25,
          color:'white',
          textAlign: 'center',
          fontWeight: 'bold',
          textShadowColor:'#e75480',
          textShadowOffset: {width:2,height:2},
          textShadowRadius:2,
      },
      imagehi:{
          height: 250,
          width:220,
          zIndex:1,
          position:'absolute',
          top:240,    
      }
  });
  export default StartPage;
  