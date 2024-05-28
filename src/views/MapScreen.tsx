import { View, Text, Image, TouchableOpacity, TextInput, Platform } from 'react-native'
import React, { useReducer, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { useAuth } from "../context/AuthContext";
import { Foundation} from '@expo/vector-icons'

export default function MapScreen({navigation}: any) {

    const {theme} =useAuth()
    Platform.OS

    return <View style={{
        flexGrow:2,
        backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',transform:[{rotate:'180deg'}]}}/> 
                <View style={{
        flexDirection:'row',
        justifyContent:'space-around'
    }}>
        <View style={{width:52}}/>
        <Text style={{
                    fontFamily:'varela-round',
                    fontSize:40,
                    alignSelf:'center',
                    margin:5,
                    color: theme == 'white' ? '#292929': '#FFFFFF'
                }}>Mapa</Text>
                {
                    /* <TouchableOpacity
                                onPress={()=>{
                                    navigation.navigate('BetBeta')
                                }}
                                style={{
                                    borderRadius:25,
                                    backgroundColor:'#1ACDFF',
                                    alignItems:'center',
                                    width:52
                                }}
                                >
                            <Foundation name={"graph-trend"} color={'#292929'} size={35} style={{
                                margin: 5
                            }} />
                        </TouchableOpacity> */
                }
                <View style={{width:52}}/>
       
    </View>
                
                <MapView style={{
                    width:'80%',
                    height: '80%',
                    flex:1,
                    alignSelf:'center',
                    borderRadius:15
                    }}      
                    initialRegion={{
                    latitude: 48.841465,
                    longitude: 2.252616,
                    latitudeDelta: 30,
                    longitudeDelta: 30
                    }} 
                    >
                <Marker coordinate={{
                    latitude: 40.453053,
                    longitude: -3.688344
                    }}
                    title="Santiago Bernabeu"
                    description='Real Madrid'
                ></Marker>
                <Marker coordinate={{
                    latitude: 41.380898,
                    longitude: 2.122820
                    }}
                    title="Camp Nou"
                    description='Barcelona FC'
                ></Marker>
                <Marker coordinate={{
                    latitude: 53.463493,
                    longitude: -2.292279
                    }}
                    title="Old Trafford"
                    description='Manchester United'
                ></Marker>
                <Marker coordinate={{
                    latitude: 48.841465,
                    longitude: 2.252616
                    }}
                    title="Le Parc des Princes"
                    description='Paris Saint-Germain'
                ></Marker>
                <Marker coordinate={{
                    latitude: 48.218967,
                    longitude: 	11.623746
                    }}
                    title="Allianz Arena"
                    description='Bayern München'
                ></Marker>
                <Marker coordinate={{
                    latitude: 41.933964,
                    longitude: 	12.454297
                    }}
                    title="Stadio Olimpico"
                    description='AS Roma'
                ></Marker>
                <Marker coordinate={{
                    latitude: 45.478489,
                    longitude: 	9.122150
                    }}
                    title="San Siro"
                    description='AC Milan / Internazionale Milano'
                ></Marker>
                <Marker coordinate={{
                    latitude: 52.514610,
                    longitude: 	13.239665
                    }}
                    title="Olympiastadion"
                    description='Gobierno de Berlin'
                ></Marker>
                <Marker coordinate={{
                    latitude: 53.430759,
                    longitude: -2.961425
                    }}
                    title="Anfield"
                    description='Liverpool FC'
                ></Marker>
                <Marker coordinate={{
                    latitude: 51.550503,
                    longitude: -0.304841
                    }}
                    title="Wembley"
                    description='Asociación del fútbol ingles'
                ></Marker>
                <Marker coordinate={{
                    latitude: 51.2933,
                    longitude: 7.2706
                    }}
                    title="Westfalenstadion"
                    description='Borussia Dortmund'
                ></Marker>
                </MapView>
                <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929'}}/> 
        </View>
    }