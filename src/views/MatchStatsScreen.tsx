import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function MatchStatsScreen({navigation}: any) {
    return <View style={{
          flexGrow:2,
          backgroundColor:'#FFFFFF',
          flexDirection:'column',
          justifyContent:'space-between'}}>
                  <Text style={{
                      fontFamily:'varela-round',
                      fontSize:40,
                      alignSelf:'center'
                  }}>Partidos</Text>
                  <Text style={{
                      fontFamily:'varela-round',
                      fontSize:40,
                      margin:20,
                      alignSelf:'center'
                  }}>Premier League</Text>
                  <ScrollView>
                      
                  </ScrollView>
          </View>
      }
    
  