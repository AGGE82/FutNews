import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View, Image, TouchableOpacity } from "react-native";
import LeaguesScreen from "../views/LeaguesScreen";
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function LeaguesTabNavigator({navigation}) {
    

    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <Image source={require("../../assets/2.png")} style={{ backgroundColor: '#FFFFFF', transform: [{ rotate: '180deg' }] }} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around'
            }}>
                <View style={{ width: 52 }} />
                <Text style={{
                    fontFamily: 'varela-round',
                    fontSize: 40,
                    alignSelf: 'center'
                }}>Ligas</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Map')
                    }}
                    style={{
                        borderRadius: 25,
                        backgroundColor: '#1ACDFF',
                        alignItems: 'center',
                        width: 52
                    }}
                >
                    <Entypo name={"map"} color={'#292929'} size={35} style={{
                        margin: 5
                    }} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('MatchesSelection')
                }}
                style={{
                    borderRadius: 25,
                    backgroundColor: '#1ACDFF',
                    alignItems: 'center',
                    margin: 20
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
                    {"Partidos"}
                </Text>
            </TouchableOpacity>
            <Tab.Navigator 
                initialRouteName="Europa" 
                screenOptions={{
                    tabBarActiveTintColor: '#292929',
                    tabBarInactiveTintColor:'#999999'
                }} 
            >
                <Tab.Screen name="Europa" options={{ tabBarLabel: 'Europa' }}>
                    {() => <LeaguesScreen navigation={navigation} region="Europa" />}
                </Tab.Screen>
                <Tab.Screen name="America" options={{ tabBarLabel: 'América' }}>
                    {() => <LeaguesScreen navigation={navigation} region="America" />}
                </Tab.Screen>
                <Tab.Screen name="Rest Of the World" options={{ tabBarLabel: 'Resto del Mundo' }}>
                    {() => <LeaguesScreen navigation={navigation} region="Rest Of the World" />}
                </Tab.Screen>
            </Tab.Navigator>
        </View>
    );
}
