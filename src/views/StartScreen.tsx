import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { useAuth } from "../context/AuthContext";

export default function StartScreen({navigation}: any) {
    
    const {theme} =useAuth()

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('LoginSelection')
        }, 3000);
     },[])

    return <View style={{
        flexGrow:2,
        backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',transform:[{rotate:'180deg'}]}}/> 
                {theme == 'black' && <Image source={require("../../assets/FullLogoBlack.png")} style={{ maxWidth: 420, maxHeight: 420 }} />}
                {theme == 'white' &&<Image source={require("../../assets/FullLogo.png")} style={{ maxWidth: 420, maxHeight: 420 }} />}
                <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929'}}/> 
        </View>
    }