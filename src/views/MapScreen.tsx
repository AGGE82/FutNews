import { View, Text, Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useReducer, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useAuth } from "../context/AuthContext";

export default function MapScreen({navigation}: any) {

    const {theme} =useAuth()
    Platform.OS

    return <View style={{
        flexGrow:2,
        backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',transform:[{rotate:'180deg'}]}}/> 
                <Text style={{
                    fontFamily:'varela-round',
                    fontSize:40,
                    alignSelf:'center',
                    margin:5,
                    color: theme == 'white' ? '#292929': '#FFFFFF'
                }}>Mapa</Text>
                <MapView style={{
                    width:'80%',
                    height: '80%',
                    flex:1,
                    alignSelf:'center'
                    }}      
                    initialRegion={{
                    latitude: 23.752538,
                    longitude: -99.141926,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                    }} 
                    >
                
                <Marker coordinate={{
                    latitude: 23.752388,
                    longitude: -99.142277
                    }}
                    title="El Estarbocks"
                    description="Esto es el Estarbocks"
                ></Marker>
                </MapView>
                <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929'}}/> 
        </View>
    }