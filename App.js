 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {createStackNavigator, HeaderStyleInterpolators, TransitionSpecs} from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import StartPage from './Components/StartPage';
import QuestionPage from './Components/QuestionPage';
import ResultPage from './Components/ResultPage';
const Stack = createStackNavigator();
import Topics from './Components/Topics';
 

 const App = () => {
   return(
   <NavigationContainer  >
     <Stack.Navigator initialRouteName="ENTER" screenOptions={{ headerShown: false}} >
       <Stack.Screen name="TOPICS" component={Topics}/>
       <Stack.Screen name="ENTER" component={StartPage}/>
       <Stack.Screen name="Question" component={QuestionPage} />
       <Stack.Screen name="Result" component={ResultPage}/>
     </Stack.Navigator>
   </NavigationContainer>
   )
 }
 
 export default App;
 