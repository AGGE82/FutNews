import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useReducer, useState } from 'react'
import LoginScreen from './LoginScreen'

export default function HomeScreen({navigation}: any) {

    return <TouchableOpacity style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}
        onPress={()=>navigation.navigate('LoginSelection')}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <Image source={require("../../assets/FullLogo.png")} style={{maxWidth:420, maxHeight:420}}/>
                <Text>  Home  </Text>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/> 
        </TouchableOpacity>
    }