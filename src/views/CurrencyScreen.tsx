import { View, Text, Image, TouchableOpacity, TextInput, Pressable, Modal } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import { Camera, CameraView } from 'expo-camera';

export default function CurrencyScreen({navigation}: any) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

      const renderCamera = () => {
        return (
          <View style={{
            width: '80%',
            aspectRatio: 1,
            overflow: 'hidden',
            borderRadius: 10,
            marginBottom: 40,
          }}>
            <CameraView
              onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{
                flex: 1,
              }}
            />
          </View>
        );
      };

      if (hasPermission === null) {
        return <View />;
      }
    
      if (hasPermission === false) {
        return (
          <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text>Camera permission not granted</Text>
          </View>
        );
      }

      const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      };

    return <View style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <View style={{
                    alignItems:'center',
                    flexDirection:'column',
                    justifyContent:'space-evenly',
                    flex:1
                }}>
                    <Text style={{
                        fontSize:40,
                        fontFamily:'varela-round'
                        }}>  
                        Monedas
                    </Text>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                        <View style={{width:30}}/>
                        <Image source={require('../../assets/coin.png')} style={{width:43, height:50}} />
                        <Text style={{
                            fontFamily:'varela-round',
                            fontSize:37
                        }}>  $00    </Text>
                    </View>
                    <Image source={require('../../assets/coinStack.gif')}/> 
                    <TouchableOpacity
                            onPress={()=>{
                                setIsVisibleModal(true)
                                setScanned(false)
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
                                        {"Agregar monedas"}
                        </Text>
                    </TouchableOpacity>
                    <Text style={{
                        marginHorizontal:80,
                        fontFamily:'varela-round',
                        fontSize:20,
                        textAlign:'center'
                        }}>¡Puedes añadir monedas escaneados códigos QR seleccionados!</Text>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isVisibleModal}
                    onRequestClose={() => {
                        setIsVisibleModal(!isVisibleModal)
                        setScanned(false)
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
                    {renderCamera()}
                        <Pressable
                            style={{
                                borderRadius:20,
                                padding:10,
                                elevation:1,
                                backgroundColor:'#1ACDFF'
                                }}
                            onPress={() => setIsVisibleModal(!isVisibleModal)}>
                            <Text style ={{
                                margin:15,
                                textAlign: 'center',
                                color:'#FFFFFF',
                                fontSize:25,
                                fontWeight:'bold'
                            }}>
                                Ocultar camara
                            </Text>
                        </Pressable>
                        </View>
                        </View>
                    </View>
            </Modal>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF'}}/> 
        </View>
    }