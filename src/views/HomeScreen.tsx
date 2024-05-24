import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'
import LoginScreen from './LoginScreen'
import axios from 'axios';
import { New } from '../interfaces/AppInterfaces';
import NewsCard from '../components/NewsCard';

export default function HomeScreen({navigation}: any) {
    const [list,setList] = useState([] as New[])
    const [numNews, setNumNews] = useState(3);
    const baseTranslateURL = "https://swift-translate.p.rapidapi.com/translate";

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
                    /*setDataModal({
                        ...list[id],
                        translatedText: response.data.translatedText
                    })
                    setIsVisibleModal(true) */
                }
            } catch (error) {
                console.log('Hubo un error al traducir: ', error);
            }
        }

        const getNews = async () => {
            try {
                const response = await axios.get("https://newsapi.org/v2/top-headlines?q=champions league&apiKey=a8ccf288579f4488808e0f5bbf05b65e")

    
                if(response.status == 200) {
                    console.log(response)
                  const newList = []
                  for (var i = 0; i< numNews; i++) {
                    const newObj = {
                      id: i,
                      text: response.data.data[i],
                      url: response.data[i].url
                    }              
                    newList.push(newObj); 
                  }
                  setList(newList)
                }
                
            }catch(error){
                console.log(error)
            }
        }

    return <View style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <TouchableOpacity
                        onPress={()=>getNews()}
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
                <Text>  Home  </Text>
                <ScrollView style={{
                                flex: 1,
                                flexDirection:'column'
                            }}>
                    {
                        list.map((item) => (
                            <NewsCard key={item.id} {...item} onPress={getTranslation}/>))
                    }
                </ScrollView>
        </View>
    }