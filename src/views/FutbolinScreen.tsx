import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ImageBackground, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons'
import axios from 'axios';
import { ChatMessage } from '../interfaces/AppInterfaces';

export default function FutbolinScreen({ navigation }: any) {

    const [message, onChangeMessage] = useState('');
    const [history, setHistory] = useState([] as ChatMessage[])
    const { GoogleGenerativeAI } = require("@google/generative-ai");
    const API_KEY = "AIzaSyAThZztEnnWGa51juBCXOIhJDBnTXepflY"
    //const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY)
    //const model = genAI.getGenerativeModel({model:'gemini-pro'})
    const geminiMessageURl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAThZztEnnWGa51juBCXOIhJDBnTXepflY'


    const getResponse = async (text: string) => {
        const dataSended: ChatMessage = {
            from: 'me',
            message: text,
            date: new Date()
        }
        const body = {
            "contents":
                [
                    {
                        "parts":
                            [
                                {
                                    "text": "Actua como si te llamaras Futbolin y tu enfoque es el futbol, " + text
                                }
                            ]
                    }
                ]
        } //--------------------
        try {
            const response = await axios.post(geminiMessageURl, body);

            console.log(response)

            if (response.status == 200) {
                const dataReceived: ChatMessage = {
                    from: 'bot',
                    message: response.data?.candidates[0]?.content?.parts[0]?.text,
                    date: new Date()
                }
                setHistory([...history, dataSended, dataReceived])
                //console.log(history)
            }
        } catch (error) {
            console.log('Hubo un error al recibir respuesta: ', error);
        } //--------------------
    }
    //navigation.goBack()

    return <View
        style={{ flex: 1 }}
    >
        <KeyboardAvoidingView style={{
            flexGrow: 2,
            backgroundColor: '#FFFFFF',
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}

        >
            <View
                style={{ flex: 1 }}
            >
                <Image source={require("../../assets/2.png")} style={{ backgroundColor: '#FFFFFF', transform: [{ rotate: '180deg' }] }} />
                <Text style={{
                    fontFamily: 'varela-round',
                    fontSize: 40,
                    alignSelf: 'center'
                }}>Futbolin</Text>
                <ScrollView style={{
                    backgroundColor: 'FFFFFF',
                    maxHeight: 590
                }}>
                    {history.map((item, i) =>
                        <View
                            key={i} style={{
                                alignSelf: item.from == 'me' ? 'flex-end' : 'flex-start',
                                flexDirection: item.from == 'me' ? 'row-reverse' : 'row',
                                margin: 10,
                                borderRadius: 15,
                                backgroundColor: item.from == 'me' ? '#00FCA8' : '#1ACDFF',
                                paddingTop: 3,
                                paddingHorizontal: 5,

                            }}>
                            <Text style={{

                                color: '#292929',

                                fontSize: 18
                            }}>
                                {item.message + "\n" + item.date.toTimeString().split(' ')[0]}
                            </Text>
                        </View>)}
                </ScrollView>
                <ImageBackground source={require("../../assets/2.png")} style={{ 
                    backgroundColor: '#FFFFFF' }} >
                    <View style={{
                        flexDirection: 'row-reverse',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={async () => {
                            console.log("PResionado")
                            await getResponse(message)
                            onChangeMessage("")
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
                                backgroundColor: '#FFFFFF',
                                color: '#292929',
                                fontSize: 17,
                                borderRadius: 5
                            }}
                            onChangeText={onChangeMessage}
                            value={message}
                            keyboardType="default"
                        />

                    </View>
                </ImageBackground>
                </View>
        </KeyboardAvoidingView>
    </View>
}