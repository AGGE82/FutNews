import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Button, ImageBackground } from 'react-native'
import React, { useEffect, useReducer, useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function ProfileScreen({navigation}: any) {

    const [hasGalleryPermission, setHasGalleryPermission] = useState(null)
    const [image, setImage] = useState(null)

    useEffect(() => {
        (async () => {
            const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
            setHasGalleryPermission(galleryStatus.status === 'granted')
        }) ()
    },[])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,3],
            quality:1000,
        })

        console.log(result.assets[0].uri)

        if (result.assets[0].fileName != null){
            console.log("encontrado!!")
            setImage(result.assets[0].uri)
        }
    }

    if (hasGalleryPermission === false){
        return <Text>No access to Internal Data</Text> 
    }

    return <View style={{
        flexGrow:2,
        backgroundColor:'#FFFFFF',
        flexDirection:'column',
        justifyContent:'space-between'}}>
                <Image source={require("../../assets/2.png")} style={{backgroundColor:'#FFFFFF',transform:[{rotate:'180deg'}]}}/> 
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                <ImageBackground source={(require("../../assets/Profile.png"))} style={{
                    flex: 1,
                    alignItems: "center",
                    width:250,
                    height:250
                }}>
                    
                    {image && <Image source={{uri:image}} style={{width:250, height:250, borderRadius:125}} />}
                </ImageBackground>
                <Button title="Pick an image from camera roll" onPress={() => pickImage()}/>
                </View>
        </View>
    }