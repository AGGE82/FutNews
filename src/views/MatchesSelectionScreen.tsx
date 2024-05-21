import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function MatchesSelectionScreen({navigation}: any) {
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
                }}>Partidos</Text>
                <Text style={{
                    fontFamily:'varela-round',
                    fontSize:40,
                    margin:20,
                    alignSelf:'center'
                }}>Premier League</Text>
                <TouchableOpacity
                            onPress={()=>{
                                navigation.navigate('MatchNav')
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
                                        {"Partido"}
                        </Text>
                    </TouchableOpacity>
                <ScrollView>
                    
                </ScrollView>
        </View>
    }
  
