import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useReducer, useState } from 'react'

export default function MatchStatsScreen({navigation}: any) {
    return <View style={{
          flexGrow:2,
          backgroundColor:'#FFFFFF',
          flexDirection:'column',
          justifyContent:'space-between'}}>
                  
                  <Text style ={{
                                            margin: 10,
                                            textAlign: 'center',
                                            color:'#999999',
                                            fontSize:40,
                                            fontFamily:'varela-round'
                                        }}>
                                            {"Estadísticas"}
                            </Text>
                  <ScrollView>
                      
                  </ScrollView>
          </View>
      }
    
  