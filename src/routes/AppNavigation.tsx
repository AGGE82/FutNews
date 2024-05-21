import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../views/StartScreen";
import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";
import LoginSelectionScreen from "../views/LoginSelectionScreen";
import TabNavigator from "./TabNavigation";
import MapScreen from "../views/MapScreen";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="LoginSelection" component={LoginSelectionScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Tab" component={TabNavigator} options={{gestureEnabled:false}}/>
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
