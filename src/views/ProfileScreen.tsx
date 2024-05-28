import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Button, ImageBackground } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import firebase from "firebase/app";
import * as st from 'firebase/storage'
import { app } from '../firebaseConfig';
import { AuthProvider, useAuth } from "../context/AuthContext";

export default function ProfileScreen({ navigation }: any) {

    const {user:{name}, user:{profilePicture}, user:{currency}, changePicture, changeAuthenticity, storeTheme, theme} = useAuth()
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
            setHasGalleryPermission(galleryStatus.status === 'granted')
            setImage(profilePicture)
        })()
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1000,
        })

        console.log(result.assets[0].uri)

        if (result.assets[0].fileName != null) {
            console.log("encontrado!!")
            setImage(result.assets[0].uri)
            uploadImage(result.assets[0].uri)
        }
    }

    const uploadImage = async (uri) => {
        const response = await fetch(uri)
        const blob = await response.blob()
        const filename = uri.substring(uri.lastIndexOf('/') + 1)
        const storage = st.getStorage(app)
        const fileRef = st.ref(storage, "files/" + filename)
        const uploadTask = await st.uploadBytesResumable(fileRef, blob);
        const url = await st.getDownloadURL(uploadTask.ref)
        changePicture(url)
        setImage(url)
    }

    const handleLogout = async () => {
        navigation.navigate("LoginSelection")
        changeAuthenticity(false)
    };

    const handleTheme = async () => {
        if (theme == 'white'){
            storeTheme('black')
        } else if (theme == 'black'){
            storeTheme('white')
        }
    };

    if (hasGalleryPermission === false) {
        return <Text>No access to Internal Data</Text>
    }

    return <View style={{
        flexGrow: 2,
        backgroundColor: theme == 'white' ? '#FFFFFF': '#292929',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
        <Image source={require("../../assets/2.png")} style={{ backgroundColor: theme == 'white' ? '#FFFFFF': '#292929', transform: [{ rotate: '180deg' }] }} />
        <View style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"
        }}>
                {image && <Image source={{ uri: image }} style={{ width: 250, height: 250, borderRadius: 125 }} />}
            <Button title="Selecciona una foto de perfil" onPress={() => pickImage()} />
            <Text style={{
                        fontSize:40,
                        fontFamily:'varela-round',
                        margin:10,
                        color: theme == 'white' ? '#292929': '#FFFFFF'
                        }}> {name}
            </Text>
            <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                        <View style={{width:30}}/>
                        <Image source={require('../../assets/coin.png')} style={{width:43, height:50}} />
                        <Text style={{
                            fontFamily:'varela-round',
                            fontSize:37,
                            color: theme == 'white' ? '#292929': '#FFFFFF'
                        }}>  ${currency}    </Text>
                    </View>
                    <TouchableOpacity
                            onPress={handleLogout}
                            style={{
                                maxWidth: 190,
                                borderRadius: 25,
                                backgroundColor: '#00FCA8',
                                alignSelf: 'center',
                                margin:20
                            }}
                        >
                            <Text style={{
                                margin: 15,
                                textAlign: 'center',
                                color: '#292929',
                                fontWeight: 'bold',
                                fontFamily:'varela-round',
                                fontSize: 24
                            }}>
                                {"LOG OUT"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleTheme}
                            style={{
                                maxWidth: 190,
                                borderRadius: 25,
                                backgroundColor: '#1ACDFF',
                                alignSelf: 'center',
                                margin:20
                            }}
                        >
                            <Text style={{
                                margin: 15,
                                textAlign: 'center',
                                color: '#292929',
                                fontWeight: 'bold',
                                fontFamily:'varela-round',
                                fontSize: 24
                            }}>
                                {"Cambiar tema"}
                            </Text>
                        </TouchableOpacity>
        </View>
    </View>
}

function useContext(AuthContext: React.Context<{ user: { email: string; name: string; number: string; profilePicture: string; currency: number; }; error: string; login: (email: string, password: string) => Promise<void>; register: (email: string, password: string, name: string, number: string, profilePicture: string, currency: number) => Promise<void>; logout: () => Promise<void>; changePassword: (currentPassword: string, newPassword: string) => Promise<void>; isAuthenticated: boolean; }>): { state: { email: any; }; } {
    throw new Error('Function not implemented.');
}
