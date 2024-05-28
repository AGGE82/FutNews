import React from "react"
import HomeScreen from "../views/HomeScreen";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image } from "react-native";
import MatchBetsScreen from "../views/MatchBetsScreen";
import MatchStatsScreen from "../views/MatchStatsScreen";

const Tab = createMaterialTopTabNavigator();

export default function MatchNavigator() {
  return (
    <View style={{flex:1, backgroundColor:'#FFFFFF'}}>
    <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
    <Text style={{
                    fontFamily:'varela-round',
                    fontSize:40,
                    alignSelf:'center'
                }}>Partido</Text>
    <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            tabBarActiveTintColor: '#292929',
            tabBarInactiveTintColor:'#999999'
        }} 
        >
            <Tab.Screen name="Bet" component={MatchBetsScreen} options={{
                tabBarLabel: 'Apostar',
                title:"Home"}}/>
            <Tab.Screen name="Stats" component={MatchStatsScreen} options={{
                tabBarLabel: 'Estadísticas',
                title:"Home"}}/>
        </Tab.Navigator>
    </View>
  )
}