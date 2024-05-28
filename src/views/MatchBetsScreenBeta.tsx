import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Modal, Pressable } from 'react-native'
import React, { useReducer, useState } from 'react'
import Svg, { Text as Txt, Rect} from "react-native-svg";
import { useAuth } from "../context/AuthContext";
import { MaterialCommunityIcons, Entypo} from '@expo/vector-icons'
import { Bet } from '../interfaces/AppInterfaces';

export default function MatchBetsScreenBeta({navigation}: any) {
    const {theme, user:{currency}, changeCurrency} =useAuth()
    const [isVisibleModalTeam1, setIsVisibleModalTeam1] = useState(false);
    const [isVisibleModalTeam2, setIsVisibleModalTeam2] = useState(false);
    const [message, onChangeMessage] = useState('');
    const [bet, setbet] = useState([] as Bet[])

    const manageBet= async (team1:boolean) => {
        if (parseInt(message) > currency){
            alert("Fondos insuficiente")
        } else {
            const newBet ={
                amount:parseInt(message),
                team:team1
            }
            bet.push(newBet)
            setbet(bet)
            changeCurrency(currency-parseInt(message))
        }
    }
    const manageWinOrLose = async() => {
        
    }
    return <View style={{
          flexGrow:2,
          backgroundColor:'#FFFFFF',
          flexDirection:'column',
          justifyContent:'space-between'}}> 
                  {//preguntar al profe como hacer un if para que cambie una "seccion de elementos"
                  }
                  <Image source={require("../../assets/2.png")} style={{ backgroundColor: theme == 'white' ? '#FFFFFF': '#292929', transform: [{ rotate: '180deg' }] }} />
                  <View style={{flexDirection:'row',
                            justifyContent:'space-evenly',
                            flex:1}}>
                                <View style={{
                                    alignSelf:'center',
                                }}>
                                    
                                    <MaterialCommunityIcons name={"shield-sun"} color={'#292929'} size={80} style={{
                                    margin: 5, alignSelf:'center'
                                     }} /> 
                                    <Text style={{
                                        fontFamily:'varela-round',
                                        fontSize:20,
                                        alignSelf:'center'
                                    }}> Team1  </Text>
                                    </View>
                                    <View style={{flexDirection:'column', justifyContent:'center'}}>
                                    <Text style={{
                                            fontFamily:'varela-round',
                                            fontSize:28,
                                            textAlign:'center',
                                            maxWidth:120,
                                            alignSelf:'center',
                                            color:'#999999'
                                        }}>31/05</Text>
                                        <Text style={{
                                            fontFamily:'varela-round',
                                            fontSize:28,
                                            textAlign:'center',
                                            maxWidth:120,
                                            alignSelf:'center',
                                            color:'#999999'
                                        }}>20:00</Text>
                                    </View>
                        <View style={{
                                    alignSelf:'center',
                                }}>
                                    <MaterialCommunityIcons name={"shield-star"} color={'#292929'} size={80} style={{
                                    margin: 5, alignSelf:'center'
                                     }} />
                                    <Text style={{
                                        fontFamily:'varela-round',
                                        fontSize:20,
                                        alignSelf:'center'
                                    }}> Team2  </Text>
                                    </View>
                  </View>
                  <View style={{flexDirection:'row',
                            justifyContent:'space-evenly',
                            flex:1}}>
                                <View style={{
                                    alignSelf:'center',
                                }}>
                                    <TouchableOpacity
                            onPress={()=>{
                                setIsVisibleModalTeam1(true)
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
                                            {"Apostar"}
                            </Text>
                    </TouchableOpacity>
                                    </View>
                        <Text style={{
                            fontFamily:'varela-round',
                            fontSize:28,
                            textAlign:'center',
                            maxWidth:120,
                            alignSelf:'center',
                            color:'#999999'
                        }}></Text>
                        <View style={{
                                    alignSelf:'center',
                                }}>
                                    <TouchableOpacity
                            onPress={()=>{
                                setIsVisibleModalTeam2(true)
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
                                            {"Apostar"}
                            </Text>
                    </TouchableOpacity>
                                    </View>
                  </View>
                  {
                    (true) ? 
                    <Image source={require('../../assets/fallingCoins.png')} style={{alignSelf:'center'}}/>
                  :
                  <Image source={require('../../assets/fallingCoins.png')} style={{alignSelf:'center'}}/>
                  }
                  <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isVisibleModalTeam1}
                    onRequestClose={() => {
                        setIsVisibleModalTeam1(!isVisibleModalTeam1)
                    }}
                >
                    <View style={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                    }}>
                        <View style ={{
                            margin: 20,
                            backgroundColor: '#00FCA8',
                            borderRadius: 20,
                            padding: 35,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset:{ width: 0, height:2},
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5
                        }}>
                    
                    <View>
                    <View style={{flexDirection:'row'}}>
                    <Text style ={{
                                            margin: 10,
                                            textAlign: 'center',
                                            color:'#292929',
                                            fontSize:28,
                                            fontFamily:'varela-round'
                                        }}>
                                            {"¿Cuanto?"}
                            </Text>
                    <TextInput
                            style={{
                                height: 50,
                                width: 100,
                                marginBottom: 20,
                                alignSelf: 'center',
                                borderWidth: 1,
                                padding: 10,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                borderRadius: 20,
                                color: '#292929',
                                backgroundColor:"#FFFFFF",
                                fontSize: 20,
                                shadowColor: '#292929',
                                fontFamily:'varela-round',
                                marginHorizontal:10
                            }}
                            onChangeText={onChangeMessage}
                            value={message}
                            keyboardType='numeric'
                        /> 
                        <TouchableOpacity onPress={async () => {
                            //getNews()
                        }}>
                            <Entypo name={"check"} color={theme == 'white' ? '#292929': '#FFFFFF'} size={35} style={{
                                marginVertical: 5
                            }} />
                        </TouchableOpacity>  
                        </View>    
                        <Pressable
                            style={{
                                borderRadius:20,
                                padding:10,
                                elevation:1,
                                backgroundColor:'#1ACDFF'
                                }}
                            onPress={() => setIsVisibleModalTeam1(!isVisibleModalTeam1)

                            }>
                            <Text style ={{
                                margin:5,
                                textAlign: 'center',
                                color: theme == 'white' ? '#FFFFFF': '#292929',
                                fontSize:25,
                                fontWeight:'bold',
                                fontFamily:'varela-round'
                            }}>
                                Cerrar
                            </Text>
                        </Pressable>
                        </View>
                        </View>
                    </View>
            </Modal>
            <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isVisibleModalTeam2}
                    onRequestClose={() => {
                        setIsVisibleModalTeam2(!isVisibleModalTeam2)
                    }}
                >
                    <View style={{
                        flex:1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 22,
                    }}>
                        <View style ={{
                            margin: 20,
                            backgroundColor: '#1ACDFF',
                            borderRadius: 20,
                            padding: 35,
                            alignItems: 'center',
                            shadowColor: '#000',
                            shadowOffset:{ width: 0, height:2},
                            shadowOpacity: 0.25,
                            shadowRadius: 4,
                            elevation: 5
                        }}>
                    
                    <View>
                    <View style={{flexDirection:'row'}}>
                    <Text style ={{
                                            margin: 10,
                                            textAlign: 'center',
                                            color:'#292929',
                                            fontSize:28,
                                            fontFamily:'varela-round'
                                        }}>
                                            {"¿Cuanto?"}
                            </Text>
                    <TextInput
                            style={{
                                height: 50,
                                width: 100,
                                marginBottom: 20,
                                alignSelf: 'center',
                                borderWidth: 1,
                                padding: 10,
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                borderRadius: 20,
                                color: '#292929',
                                backgroundColor:"#FFFFFF",
                                fontSize: 20,
                                shadowColor: '#292929',
                                fontFamily:'varela-round',
                                marginHorizontal:10
                            }}
                            onChangeText={onChangeMessage}
                            value={message}
                            keyboardType='numeric'
                        /> 
                        <TouchableOpacity onPress={async () => {
                            //getNews()
                        }}>
                            <Entypo name={"check"} color={theme == 'white' ? '#292929': '#FFFFFF'} size={35} style={{
                                marginVertical: 5
                            }} />
                        </TouchableOpacity>  
                        </View>
                        <Pressable
                            style={{
                                borderRadius:20,
                                padding:10,
                                elevation:1,
                                backgroundColor:'#00FCA8'
                                }}
                            onPress={() => setIsVisibleModalTeam2(!isVisibleModalTeam2)

                            }>
                            <Text style ={{
                                margin:5,
                                textAlign: 'center',
                                color: theme == 'white' ? '#FFFFFF': '#292929',
                                fontSize:25,
                                fontWeight:'bold',
                                fontFamily:'varela-round'
                            }}>
                               Cerrar
                            </Text>
                        </Pressable>
                        </View>
                        </View>
                    </View>
            </Modal>
          </View>
      }
    
  