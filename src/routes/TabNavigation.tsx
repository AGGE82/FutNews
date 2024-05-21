import React from "react"
import HomeScreen from "../views/HomeScreen";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import LeaguesScreen from "../views/LeaguesScreen";
import FutbolinScreen from "../views/FutbolinScreen";
import CurrencyScreen from "../views/CurrencyScreen";
import ProfileScreen from "../views/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            tabBarActiveTintColor: '#292929',
            tabBarActiveBackgroundColor:'#FFFFFF',
            tabBarInactiveBackgroundColor:'#FFFFFF',
            tabBarInactiveTintColor:'#999999'
        }} 
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarLabel: 'Inicio',
                title:"Home",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size+1.8} />
                )}}/>
            <Tab.Screen name="Leagues" component={LeaguesScreen} options={{
                tabBarLabel: 'Ligas',
                title:"Leagues",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="soccer-field" color={color} size={size+1.8} />
                )}}/>
            <Tab.Screen name="Futbolin" component={FutbolinScreen} options={{
                tabBarLabel: 'Futbolin AI',
                title:"Futbolin",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="question" color={color} size={size+1.8} />
                )}}/>
            <Tab.Screen name="Currency" component={CurrencyScreen} options={{
                tabBarLabel: 'Monedas',
                title:"Currency",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="attach-money" color={color} size={size+1.8} />
                )}}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarLabel: 'Perfil',
                title:"Profile",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="person" color={color} size={size+1.8} />
                )}}/>
        </Tab.Navigator>
  )
}