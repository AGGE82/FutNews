import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Modal, ImageBackground, Linking } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import LoginScreen from './LoginScreen'
import axios from 'axios';
import { New } from '../interfaces/AppInterfaces';
import NewsCard from '../components/NewsCard';
import { Entypo } from '@expo/vector-icons'
import { useAuth } from "../context/AuthContext";

export default function HomeScreen({ navigation }: any) {
    const {theme} =useAuth()
    const [list, setList] = useState([] as New[])
    const [numNews, setNumNews] = useState(7);
    const [newsModal, setNewsModal] = useState({} as any);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const baseTranslateURL = "https://swift-translate.p.rapidapi.com/translate";

    useEffect(() =>{
        getNews();
    },[]);

    const getTranslation = async (text: string, id: number) => {
        const body = {
            text: text,
            sourceLang: "en",
            targetLang: "es"
        }
        const headers = {
            "X-RapidAPI-Key": "bd61e28000msh611526b6fc0c620p1155dejsnd52dce060b93",
            "X-RapidAPI-Host": "swift-translate.p.rapidapi.com"
        }
        try {
            const response = await axios.post(baseTranslateURL, body, { headers });

            if (response.status == 200) {
                
            }
        } catch (error) {
            console.log('Hubo un error al traducir: ', error);
            setNewsModal({
                ...list[id],
            })
            setIsVisibleModal(true) 
        }
    }

    const getNews = async () => {
        try {
            const response = await axios.get("https://newsapi.org/v2/everything?q=fútbol colombiano&apiKey=a8ccf288579f4488808e0f5bbf05b65e")


            if (response.status == 200) {
                const newList = []
              for (var i = 0; i< numNews; i++) {
                const newObj = {
                  id: i,
                  source:response.data.articles[i].source.name,
                  title: response.data.articles[i].title,
                  description: response.data.articles[i].description,
                  urlToImage: response.data.articles[i].urlToImage,
                  url:  response.data.articles[i].url,
                  content:response.data.articles[i].content,
                }              
                newList.push(newObj);
              }
            setList(newList)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return <View style={{
        flexGrow: 2,
        backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
        flexDirection: 'column',
    }}>
        <Image source={require("../../assets/2.png")} style={{ backgroundColor: theme == 'white' ? '#FFFFFF': '#292929', transform: [{ rotate: '180deg' }] }} />
       
        <Text style={{
                        fontSize:40,
                        fontFamily:'varela-round',
                        textAlign:'center',
                        color: theme == 'white' ? '#292929': '#FFFFFF'
                        }}>  
                        Noticias
                    </Text>       
        <ScrollView style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                {
                    list.map((item: any) => (
                        <NewsCard key={item.id} {...item} onPress={getTranslation} />))
                }
                <Modal
            animationType="slide"
            key={newsModal.id}
            transparent={true}
            visible={isVisibleModal}
            onRequestClose={() => {
                setIsVisibleModal(!isVisibleModal)
            }}
            >
                <View style={{
                    flex:1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 22,
                    
                }}>
                    <View style ={{
                        margin: 10,
                        backgroundColor: 'white',
                        borderRadius: 20,
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset:{ width: 0, height:2},
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 5,
                        borderColor: theme == 'white' ? '#292929': '#FFFFFF',
                        borderWidth:1
                    }}>
                        <ImageBackground source={require("../../assets/ImageBck.png")} style={{ 
                    backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
                    borderRadius:20 }}>
                        <View style={{
                            flexDirection:'row',
                            maxWidth:400,
                        }}>
                        <TouchableOpacity
                        style={{
                            margin:20,
                            }}
                        onPress={() => setIsVisibleModal(!isVisibleModal)}>
                        <Entypo name={"cross"} color={theme == 'white' ? '#292929': '#FFFFFF'} size={35} style={{
                                margin: 5
                            }} />
                        </TouchableOpacity>
                            <Text style ={{
                                fontFamily:'varela-round',
                                fontSize:20,
                                padding:20,
                                textAlign: 'justify',
                                flexWrap:'wrap',
                                maxWidth:300,
                                color: theme == 'white' ? '#292929': '#FFFFFF'
                            }}>
                                {newsModal.title}
                            </Text>
                        </View>
                        <Image
                            style={{
                            width: 340,
                            height: 320,
                            margin:20,
                            borderRadius:15,
                            alignSelf:'center'
                        }}
                            source={{
                            uri:newsModal.urlToImage
                        }}/>
                        <Text style ={{
                            paddingHorizontal:20,
                            textAlign: 'center',
                            fontFamily:'varela-round',
                            color: theme == 'white' ? '#292929': '#FFFFFF'
                        }}>
                            {newsModal.description}
                        </Text>
                        <TouchableOpacity
                        style={{
                            borderRadius:20,
                            padding:10,
                            elevation:1,
                            margin:20,
                            backgroundColor:'#1CDAFF',
                            maxWidth:150,
                            alignSelf:'center'
                            }}
                        onPress={() => {Linking.openURL(newsModal.url)}}>
                        <Text style ={{
                            textAlign: 'center',
                            fontFamily:'varela-round',
                            color:'#292929',
                            fontSize:15
                        }}>
                            Seguir Leyendo
                        </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                    </View>
                </View>
            </Modal>
            </ScrollView>
    </View>
}