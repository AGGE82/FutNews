import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../views/StartScreen";
import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";
import LoginSelectionScreen from "../views/LoginSelectionScreen";
import HomeScreen from "../views/HomeScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="LoginSelection" component={LoginSelectionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
