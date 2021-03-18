 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
 import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
 import { View, Text, StyleSheet } from 'react-native';
 import StartPage from './Components/StartPage';
import QuestionPage1 from './Components/QuestionPage';
import ResultPage from './Components/ResultPage';
 const Stack = createStackNavigator();
 
 const App = () => {
   return(
   <NavigationContainer>
     <Stack.Navigator initialRouteName="ENTER" screenOptions={{headerShown: false}}>
       <Stack.Screen name="ENTER" component={StartPage}/>
       <Stack.Screen name="Question1" component={QuestionPage1}/>
       <Stack.Screen name="Result" component={ResultPage}/>
     </Stack.Navigator>
   </NavigationContainer>
   )
 }
 
 export default App;
 