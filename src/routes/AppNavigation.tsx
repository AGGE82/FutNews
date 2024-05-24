import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import {  GestureHandlerRefContext, createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../views/StartScreen";
import LoginScreen from "../views/LoginScreen";
import SignUpScreen from "../views/SignUpScreen";
import LoginSelectionScreen from "../views/LoginSelectionScreen";
import TabNavigator from "./BottomTabNavigator";
import MapScreen from "../views/MapScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import TopTabNavigator from "./LeaguesTabNavigator";
import MatchesSelectionScreen from "../views/MatchesSelectionScreen";
import MatchNavigator from "./MatchNavigator";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName="Start" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="LoginSelection" component={LoginSelectionScreen} options={{gestureEnabled:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Tab" component={BottomTabNavigator} options={{gestureEnabled:false}}/>
        <Stack.Screen name="TopTab" component={TopTabNavigator} />
        <Stack.Screen name="MatchNav" component={MatchNavigator} />
        <Stack.Screen name="Map" component={MapScreen} />
        <Stack.Screen name="MatchesSelection" component={MatchesSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
