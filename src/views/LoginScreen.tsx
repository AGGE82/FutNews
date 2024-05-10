import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'
//import { AuthProvider } from "./src/context/AuthContext";

export default function LoginScreen({navigation}: any) {

    const [textEmail,setTextEmail] = useState("")
    const [textPassword, setTextPassword] = useState("")
    

    return <AuthProvider> 
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
                    <ScrollView>
                    <Text style={{
                        marginLeft:25,
                        marginBottom:20,
                        fontSize:40,
                        fontWeight:'bold'
                        }}> Login </Text>
                    <TextInput
                            style={{
                                height: 50,
                                width: 350,
                                marginBottom:20,
                                alignSelf:'center',
                                borderWidth: 1,
                                padding: 10,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                borderRadius:20,
                                color:'#292929',
                                fontSize:20,
                                shadowColor:'#292929',
                            }}
                            onChangeText={setTextEmail}
                            placeholder='Correo'
                            value={textEmail}
                            keyboardType="default"
                        />
                        <TextInput
                            style={{
                                height: 50,
                                width: 350,
                                alignSelf:'center',
                                marginBottom:30,
                                borderWidth: 1,
                                padding: 10,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                borderRadius:20,
                                color:'#292929',
                                fontSize:20
                            }}
                            onChangeText={setTextPassword}
                            placeholder='Contraseña'
                            value={textPassword}
                            keyboardType="default"
                        />
                        <TouchableOpacity
                        onPress={()=>navigation.navigate('Home')}
                        style={{
                            maxWidth:120,
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
                                    fontSize:24
                                }}>
                                    {"LOG IN"}
                                </Text>
                                
                    </TouchableOpacity>
                    </ScrollView>
                    </View>
            <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/> 
        </View>
   </AuthProvider>
    
    }