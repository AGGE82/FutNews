import { New } from "../interfaces/AppInterfaces";
import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'

interface Props extends New{
    onPress : (textToTranslate:string, idItem:number) => any;
}

export default function NewsCard({id, title, desc, url, onPress}: Props){
    
 return <TouchableOpacity
      key={id} 
      onPress ={() => onPress(desc, id)}
      style={{
        backgroundColor:"#1CDAFF",
        borderRadius:10,
        flexDirection:"row", 
        gap:5,
        margin: 5
        }}
        >
        <Text 
          numberOfLines={5}
          style={{
            flex:1,
            textAlign: 'justify',
          }}
        >{title}</Text>
        <Image
          style={{
            width: 100,
            height: 100,
            borderTopLeftRadius:10,
            borderBottomLeftRadius:10,
          }}
          source={{
            uri:url
          }}/>
        
        <Text 
          numberOfLines={5}
          style={{
            flex:1,
            textAlign: 'justify',
          }}
        >{desc}</Text>
    </TouchableOpacity>
  }

