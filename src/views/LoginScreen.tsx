import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { AuthProvider, useAuth } from "../context/AuthContext";
import { AntDesign } from '@expo/vector-icons';
import * as Google from 'expo-auth-session/providers/google';
import { getAuth, signInWithCredential, GoogleAuthProvider } from "firebase/auth";
import * as WebBrowser from "expo-web-browser";


WebBrowser.maybeCompleteAuthSession()

export default function LoginScreen({ navigation }) {
    const { user, login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [request, response, promptAsync] = Google.useAuthRequest({
        webClientId: '132774421251-oc7q1v4earlnj0gn75221ptf0nn81fiv.apps.googleusercontent.com', 
        androidClientId:"132774421251-s4fr0s6l98fkk5bct1qhi7ovvpkemmko.apps.googleusercontent.com",
        iosClientId:"132774421251-sfgeuttat8b4niiua22pd73mha9f4p8m.apps.googleusercontent.com"
    });

    const auth = getAuth();

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            firebaseSignInWithGoogle(id_token);
        }
    }, [response]);

    useEffect(() => {
        if (user) {
            setEmail('');
            setPassword('');
            navigation.navigate('Tab');
        }
    }, [user, navigation]);

    const handleLogin = async () => {
        if (!email || !password) {
            setErrorMessage('Por favor, ingrese el correo electrónico y la contraseña.');
            return;
        }

        try {
            await login(email, password);
        } catch (error) {
            setErrorMessage('Correo electrónico o contraseña incorrectos.');
        }
    };

    const firebaseSignInWithGoogle = async (idToken) => {
        const credential = GoogleAuthProvider.credential(idToken);
        try {
            await signInWithCredential(auth, credential);
            console.log('Usuario ha iniciado sesión con Google y Firebase');
            navigation.navigate('Tab');
        } catch (error) {
            console.error('Error al iniciar sesión con Google y Firebase:', error);
        }
    };

    return (
        <AuthProvider>
            <View style={{ flex: 1 }}>
                <Image source={require("../../assets/2.png")} style={{ backgroundColor: '#FFFFFF', transform: [{ rotate: '180deg' }] }} />
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-evenly', backgroundColor: '#FFFFFF' }}>
                    <Image source={require("../../assets/FullLogo.png")} style={{ maxWidth: 420, maxHeight: 200 }} />
                    <ScrollView>
                        <Text style={{ marginLeft: 25, marginBottom: 20, fontSize: 40, fontWeight: 'bold' }}> Login </Text>
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
                            keyboardType="default"
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
                            keyboardType="default"
                            secureTextEntry={true}
                        />
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={{
                                maxWidth: 120,
                                borderRadius: 25,
                                backgroundColor: '#00FCA8',
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
                                {"LOG IN"}
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                promptAsync();
                            }}
                            disabled={!request}
                            style={{
                                maxWidth: 300,
                                borderRadius: 25,
                                backgroundColor: '#DB4437',
                                alignSelf: 'center',
                                marginTop: 20,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: request ? 1 : 0.5
                            }}
                        >
                            <AntDesign name="google" size={20} color="#FFFFFF" style={{ marginRight: 10 }} />
                            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Sign in with Google</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <Image source={require("../../assets/2.png")} style={{ backgroundColor: '#FFFFFF' }} />
            </View>
        </AuthProvider>
    );
}
