import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'
import Svg, { Text as Txt, Rect} from "react-native-svg";

export default function MatchBetsScreen({navigation}: any) {
    return <View style={{
          flexGrow:2,
          backgroundColor:'#FFFFFF',
          flexDirection:'column',
          justifyContent:'space-between'}}> 
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
                  {//preguntar al profe como hacer un if para que cambie una "seccion de elementos"
                  }
                  <View style={{flexDirection:'row',
                            justifyContent:'space-evenly',
                            flex:1}}>
                                <View style={{
                                    alignSelf:'center',
                                }}>
                                    <Svg height="40" width="95" >
                                    <Txt
                                        stroke="#292929"
                                        strokeWidth="1.2"
                                        fill="#E05265"
                                        fontSize="30"
                                        fontFamily='varela-round'
                                        y="30"
                                    >
                                        Pierde
                                    </Txt>
                                    </Svg>
                                    </View>
                        <Text style={{
                            fontFamily:'varela-round',
                            fontSize:28,
                            textAlign:'center',
                            maxWidth:120,
                            alignSelf:'center',
                            color:'#999999'
                        }}>Apuesta Actual</Text>
                        <View style={{
                                    alignSelf:'center',
                                }}>
                                    <Svg height="40" width="74" >
                                    <Txt
                                        stroke="#292929"
                                        strokeWidth="1.2"
                                        fill="#00FCA8"
                                        fontSize="30"
                                        fontFamily='varela-round'
                                        y="30"
                                    >
                                        Gana
                                    </Txt>
                                    </Svg>
                                    <Text style={{
                                        fontFamily:'varela-round',
                                        fontSize:25
                                    }}>  $00  </Text>
                                    </View>
                  </View>
                  <TouchableOpacity
                            onPress={()=>{
                                //navigation.navigate('TopTab')
                            }}
                            style={{
                                borderRadius:25,
                                backgroundColor:'#1ACDFF',
                                alignItems:'center',
                                marginVertical:20,
                                marginHorizontal:80,
                            }}
                            >
                            <Text style ={{
                                            margin: 10,
                                            textAlign: 'center',
                                            color:'#292929',
                                            fontSize:28,
                                            fontFamily:'varela-round'
                                        }}>
                                            {"Cambiar Apuesta"}
                            </Text>
                    </TouchableOpacity>
                  <Image source={require('../../assets/fallingCoins.png')} style={{alignSelf:'center'}}/> 
                  <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/> 
          </View>
      }
    
  