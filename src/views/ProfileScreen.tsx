import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function ProfileScreen({navigation}: any) {

    return <View style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <Image source={require("../../assets/FullLogo.png")} style={{maxWidth:420, maxHeight:420}}/>
        </View>
    }