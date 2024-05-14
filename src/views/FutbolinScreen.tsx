import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ImageBackground, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'
import {Ionicons, Feather} from '@expo/vector-icons'

export default function FutbolinScreen({navigation}: any) {

    const [message, onChangeMessage] = useState('');
    //navigation.goBack()

    return <KeyboardAvoidingView style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/>
                <Text style={{
                    fontFamily:'varela-round',
                    fontSize:40,
                    alignSelf:'center'
                }}>Futbolin</Text>
                <ScrollView>
                    
                </ScrollView>
                <ImageBackground source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}} > 
                    <View style={{
                        flexDirection: 'row-reverse',
                        alignItems:'center'
                    }}>
                        <TouchableOpacity onPress={async () => {
                            console.log("PResionado")
                            //await getResponse(message)
                        }}>
                            <Feather name={"send"} color={'#292929'} size={35} style={{
                                margin: 5
                            }} />
                        </TouchableOpacity>
                        <TextInput
                            style={{
                                height: 40,
                                width: 340,
                                marginLeft: 10,
                                padding: 10,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                backgroundColor:'#FFFFFF',
                                color:'#292929',
                                fontSize:17,
                                borderRadius:5
                            }}
                            onChangeText={onChangeMessage}
                            value={message}
                            keyboardType="default"
                        />

                    </View>
                </ImageBackground>
        </KeyboardAvoidingView>
    }