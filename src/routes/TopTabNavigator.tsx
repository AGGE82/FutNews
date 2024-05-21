import React from "react"
import HomeScreen from "../views/HomeScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <View style={{flex:1}}>
    <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
    <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            tabBarActiveTintColor: '#292929',
            tabBarInactiveTintColor:'#999999'
        }} 
        >
            <Tab.Screen name="Login" component={HomeScreen} options={{
                tabBarLabel: 'Europa',
                title:"Home"}}/>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'America',
                title:"Home"}}/>
                <Tab.Screen name="Map" component={HomeScreen} options={{
                tabBarLabel: 'Rest Of the World',
                title:"Home"}}/>
        </Tab.Navigator>
        
        
    </View>
  )
}