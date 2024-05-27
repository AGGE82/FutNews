import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../views/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import FutbolinScreen from "../views/FutbolinScreen";
import CurrencyScreen from "../views/CurrencyScreen";
import ProfileScreen from "../views/ProfileScreen";
import TopTabNavigator from "./LeaguesTabNavigator";
import LeaguesTabNavigator from "./LeaguesTabNavigator";
import { useAuth } from "../context/AuthContext";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {

    const {theme} =useAuth()

  return (
    <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{
            tabBarActiveTintColor: theme == 'white' ? '#292929': '#FFFFFF',
            tabBarActiveBackgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
            tabBarInactiveBackgroundColor:theme == 'white' ? '#FFFFFF': '#292929',
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
            <Tab.Screen name="LeaguesTopTab" component={LeaguesTabNavigator} options={{
                tabBarLabel: 'Ligas',
                title:"Leagues",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="soccer-field" color={color} size={size+4} />
                )}}/>
            <Tab.Screen name="Futbolin" component={FutbolinScreen} options={{
                tabBarLabel: 'Futbolin AI',
                title:"Futbolin",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="soccer-ball" color={color} size={size+1.8} />
                )}}/>
            <Tab.Screen name="Currency" component={CurrencyScreen} options={{
                tabBarLabel: 'Monedas',
                title:"Currency",
                headerShown:false,
                tabBarIcon: ({ color, size }) => (
                    <Fontisto name="dollar" color={color} size={size+1.8} />
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