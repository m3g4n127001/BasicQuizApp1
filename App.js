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
import QuestionPage1 from './Components/QuestionPage';
import ResultPage from './Components/ResultPage';
const Stack = createStackNavigator();
 
const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current, next, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            rotate: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
}

 const App = () => {
   return(
   <NavigationContainer  >
     <Stack.Navigator initialRouteName="ENTER" screenOptions={{ headerShown: false, ...MyTransition}} >
       <Stack.Screen name="ENTER" component={StartPage}/>
       <Stack.Screen name="Question1" component={QuestionPage1} />
       <Stack.Screen name="Result" component={ResultPage}/>
     </Stack.Navigator>
   </NavigationContainer>
   )
 }
 
 export default App;
 