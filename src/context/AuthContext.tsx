import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { getDatabase, ref, set, get, update } from "firebase/database";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from "../firebaseConfig";


const auth = getAuth(app);
const database = getDatabase(app);

type User = {
  email: string;
  name: string;
  number: string;
  profilePicture: string;
  currency: number;
};

type AuthContextType = {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, number: string, profilePicture:string, currency:number) => Promise<void>;
  logout: () => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  changePicture: (newPicture:string) => Promise<void>;
  changeCurrency: (newCurrency:number) => Promise<void>;
  storeTheme: (value:string) => Promise<void>;
  getTheme: () => Promise<void>;
  changeAuthenticity: (change:boolean) => Promise<void>;
  isAuthenticated: boolean;
  theme:string;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  changePassword: () => Promise.resolve(),
  changePicture: () => Promise.resolve(),
  changeCurrency: () => Promise.resolve(),
  storeTheme: () => Promise.resolve(),
  getTheme: () => Promise.resolve(),
  changeAuthenticity: () => Promise.resolve(),
  isAuthenticated: false,
  theme: 'white',
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [theme,setTheme] = useState("white")

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser({ email: user.email ?? '', name: '', number: '', profilePicture:"", currency:0 }); 
      setError(null);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Correo electrónico o contraseña incorrectos.');
    }
  };

  const register = async (email: string, password: string, name: string, number: string, profilePicture: string, currency:number) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(database, `users/${user.uid}`), { email, name, number, profilePicture, currency });
      setUser({ email: user.email ?? '', name, number, profilePicture, currency });
      setError(null);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Error al registrar usuario');
    }
  };

  const logout = async () => {
    setIsAuthenticated(false);
    console.log(isAuthenticated)
  };

  const changePassword = async (currentPassword: string, newPassword: string) => {
    try {
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        setError(null);
      } else {
        throw new Error('Usuario no autenticado');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
      setError('Error al cambiar la contraseña');
    }
  };

  const changePicture = async (newPicture:string) => {
    try {
      const user = auth.currentUser;
      if (user) {
        update(ref(database, `users/${user.uid}`), { profilePicture:newPicture})
        setError(null);
      } else {
        throw new Error('Usuario no autenticado');
      }
    } catch (error) {
      console.error('Error al cambiar la imagen:', error);
      setError('Error al cambiar la imagen');
    }
  };

  const changeCurrency = async (newCurrency:number) => {
    try {
      const user = auth.currentUser;
      if (user) {
        update(ref(database, `users/${user.uid}`), {currency:newCurrency})
        setError(null);
      } else {
        throw new Error('Usuario no autenticado');
      }
    } catch (error) {
      console.error('Error al cambiar la imagen:', error);
      setError('Error al cambiar la imagen');
    }
  };

  const changeAuthenticity = async (change:boolean) => {
    try {
      if(change){
        setIsAuthenticated(true)
      } else{
        setIsAuthenticated(false)
      }
    } catch (error) {
      console.error('Error al cambiar la imagen:', error);
      setError('Error al cambiar la imagen');
    }
  };

  const storeTheme = async (value) => {
    try {
      await AsyncStorage.setItem('theme', value);
      setTheme(value)
      console.log(value)
    } catch (error) {
      console.error('Error con el tema:', error);
    }
  };

  const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('theme');
      setTheme(value)
    } catch (error) {
      console.error('Error al cambiar el tema: ', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userSnapshot = await get(ref(database, `users/${user.uid}`));
        const userData = userSnapshot.val();
        setUser({ email: user.email ?? '', ...userData });
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, error, login, register, logout, changePassword, changePicture, changeCurrency, storeTheme, getTheme, changeAuthenticity, isAuthenticated, theme}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

