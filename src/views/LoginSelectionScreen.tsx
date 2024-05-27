import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'
import { useAuth } from "../context/AuthContext";

export default function LoginSelectionScreen({navigation}: any) {
    const {theme} =useAuth()
    return (
        <View style={{
            flex:1
            }}>
            <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
                transform:[{rotate:'180deg'}]}}/>  
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    backgroundColor: theme == 'white' ? '#FFFFFF': '#292929'
                }}>
                    {theme == 'black' && <Image source={require("../../assets/FullLogoBlack.png")} style={{ maxWidth: 420, maxHeight: 200 }} />}
                    {theme == 'white' &&<Image source={require("../../assets/FullLogo.png")} style={{ maxWidth: 420, maxHeight: 200 }} />}
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                        style={{
                            maxWidth:280,
                            borderRadius:25,
                            backgroundColor:'#00FCA8',
                            alignSelf:'center'
                        }}
                    >
                        <Text style ={{
                                    margin:15,
                                    textAlign: 'center',
                                    color:'#292929',
                                    fontWeight:'bold',
                                    fontSize:42,
                                    fontFamily:'varela-round'
                                }}>
                                    {"LOG IN"}
                                </Text>
                                
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('SignUp')}
                        style={{
                            maxWidth:280,
                            borderRadius:25,
                            backgroundColor:'#1CDAFF',
                            alignSelf:'center'
                        }}
                    >
                        <Text style ={{
                                    margin:15,
                                    textAlign: 'center',
                                    color:'#292929',
                                    fontWeight:'bold',
                                    fontSize:42,
                                    fontFamily:'varela-round'
                                }}>
                                    {"SIGN UP"}
                                </Text>
                    </TouchableOpacity>
                    </View>
            <Image source={require("../../assets/2.png")} style={{backgroundColor: theme == 'white' ? '#FFFFFF': '#292929'}}/> 
        </View>
        )
    
    }