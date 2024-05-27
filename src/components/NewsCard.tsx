import { New } from "../interfaces/AppInterfaces";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useAuth } from "../context/AuthContext";

interface Props extends New {
  onPress: (title: string, id: number) => any;
  //urlToImage: string
}

export default function NewsCard({ id,source, title, description, urlToImage, onPress }: Props) {

  const {theme} =useAuth()
  return <TouchableOpacity
    key={id}
    onPress={() => onPress(description, id)}
    style={{
      backgroundColor: id % 2 === 0 ? '#00FCA8' : '#1ACDFF',
      borderRadius: 10,
      flexDirection: "row",
      gap: 5,
      margin: 5,
      borderColor: theme == 'white' ? '#292929': '#FFFFFF',
      borderWidth:1
    }}
  >
    <Image
      style={{
        width: 152,
        height: 105,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}
      source={{
        uri: urlToImage
      }} />
      <View style={{
        flexDirection:'column',
        flex:1,
        alignContent:'center'
      }}>
          <Text
          style={{
            flex: 1,
            fontFamily:'varela-round',
            marginRight:5,
            marginTop:5,
            maxHeight:20,
            fontSize:12,
            color:"#292929"
          }}
        >{source}</Text>
          <Text
          numberOfLines={5}
          style={{
            textAlign: 'justify',
            fontFamily:'varela-round',
            marginRight:5,
            marginBottom:10,
            fontSize:15
          }}
        >{title}</Text>
      </View>
  </TouchableOpacity>
}

