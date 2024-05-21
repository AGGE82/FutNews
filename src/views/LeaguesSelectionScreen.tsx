import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function LeaguesSelectionScreen({navigation}: any) {

    return <View style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <Text style={{
                    fontFamily:'varela-round',
                    fontSize:40,
                    alignSelf:'center'
                }}>Ligas</Text>
                <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('TopTab')
                            }}
                            style={{
                                borderRadius:25,
                                backgroundColor:'#1ACDFF',
                                alignItems:'center'
                            }}
                            >
                        <Text style ={{
                                        margin: 10,
                                        textAlign: 'center',
                                        color:'#292929',
                                        fontSize:28,
                                        fontWeight:'bold',
                                        fontFamily:'varela-round'
                                    }}>
                                        {"Mapa"}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('MatchesSelection')
                            }}
                            style={{
                                borderRadius:25,
                                backgroundColor:'#1ACDFF',
                                alignItems:'center',
                                margin:20
                            }}
                            >
                        <Text style ={{
                                        margin: 10,
                                        textAlign: 'center',
                                        color:'#292929',
                                        fontSize:28,
                                        fontWeight:'bold',
                                        fontFamily:'varela-round'
                                    }}>
                                        {"Partidos"}
                        </Text>
                    </TouchableOpacity>
                <ScrollView>
                    
                </ScrollView>
        </View>
    }