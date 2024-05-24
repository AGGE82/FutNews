import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function LoginSelectionScreen({navigation}: any) {

    const [textEmail,setTextEmail] = useState("")
    const [textPassword, setTextPassword] = useState("")
    

    return (
        <View style={{
            flex:1
            }}>
            <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',
                transform:[{rotate:'180deg'}]}}/>  
                <View style={{
                    flex:1,
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    backgroundColor:'#FFFFFF'
                }}>
                    <Image source={require("../../assets/FullLogo.png")} style={{maxWidth:420, maxHeight:200}}/>
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
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Tab')}
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
                                    {"test"}
                                </Text>
                                
                    </TouchableOpacity>
                    </View>
            <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/> 
        </View>
        )
    
    }