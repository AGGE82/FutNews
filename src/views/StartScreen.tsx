import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'

export default function StartScreen({navigation}: any) {

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('LoginSelection')
        }, 3000);
     }, [])

    return <View style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <Image source={require("../../assets/FullLogo.png")} style={{maxWidth:420, maxHeight:420}}/>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/> 
        </View>
    }