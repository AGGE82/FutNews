import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from "../context/AuthContext";

export default function SignUpScreen({ navigation }: any) {
    const { register, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); 
    const [number, setNumber] = useState(""); 

    const handleSignUp = async () => {
        try {
            await register(email, password, name, number); 
            console.log("Usuario registrado!")
            navigation.navigate("Tab")
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <Image source={require("../../assets/2.png")} style={{ backgroundColor: '#FFFFFF', transform: [{ rotate: '180deg' }] }} />
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: '#FFFFFF' }}>
                <Image source={require("../../assets/FullLogo.png")} style={{ maxWidth: 420, maxHeight: 160 }} />
                <ScrollView>
                    <Text style={{ marginLeft: 25, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}> Sign Up </Text>
                    <TextInput
                        style={{
                            height: 50,
                            width: 350,
                            marginBottom: 20,
                            alignSelf: 'center',
                            borderWidth: 1,
                            padding: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            borderRadius: 20,
                            color: '#292929',
                            fontSize: 20,
                            shadowColor: '#292929',
                        }}
                        onChangeText={setEmail}
                        placeholder='Correo'
                        value={email}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={{
                            height: 50,
                            width: 350,
                            alignSelf: 'center',
                            marginBottom: 20,
                            borderWidth: 1,
                            padding: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            borderRadius: 20,
                            color: '#292929',
                            fontSize: 20
                        }}
                        onChangeText={setName}
                        placeholder='Nombre'
                        value={name}
                        keyboardType="default"
                    />
                    <TextInput
                        style={{
                            height: 50,
                            width: 350,
                            alignSelf: 'center',
                            marginBottom: 20,
                            borderWidth: 1,
                            padding: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            borderRadius: 20,
                            color: '#292929',
                            fontSize: 20
                        }}
                        onChangeText={setNumber} 
                        placeholder='Número'
                        value={number}
                        keyboardType="phone-pad"
                    />
                    <TextInput
                        style={{
                            height: 50,
                            width: 350,
                            alignSelf: 'center',
                            marginBottom: 30,
                            borderWidth: 1,
                            padding: 10,
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            borderRadius: 20,
                            color: '#292929',
                            fontSize: 20
                        }}
                        onChangeText={setPassword}
                        placeholder='Contraseña'
                        value={password}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={{
                            maxWidth: 170,
                            borderRadius: 25,
                            backgroundColor: '#1CDAFF',
                            alignSelf: 'center'
                        }}
                    >
                        <Text style={{
                            margin: 15,
                            textAlign: 'center',
                            color: '#292929',
                            fontWeight: 'bold',
                            fontSize: 24
                        }}>
                            {"SIGN UP"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            <Image source={require("../../assets/2.png")} style={{ backgroundColor: '#FFFFFF' }} />
        </View>
    );
}
