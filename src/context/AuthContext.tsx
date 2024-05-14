import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";
import { app } from "../firebaseConfig"; 

const auth = getAuth(app);
const database = getDatabase(app);

type User = {
  email: string;
  name: string;
  number: string;
};

type AuthContextType = {
  user: User | null;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string, number: string) => Promise<void>;
  logout: () => Promise<void>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  error: null,
  login: () => Promise.resolve(),
  register: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  changePassword: () => Promise.resolve(),
  signInWithGoogle: () => Promise.resolve(),
  isAuthenticated: false,
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setUser({ email: user.email ?? '', name: '', number: '' }); 
      setError(null);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Correo electrónico o contraseña incorrectos.');
    }
  };

  const register = async (email: string, password: string, name: string, number: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await set(ref(database, `users/${user.uid}`), { email, name, number });
      setUser({ email: user.email ?? '', name, number });
      setError(null);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setError('Error al registrar usuario');
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setError(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      setError('Error al cerrar sesión');
    }
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

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      setUser({ email: user.email ?? '', name: user.displayName ?? '', number: '' }); 
      setError(null);
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      setError('Error al iniciar sesión con Google');
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
    <AuthContext.Provider value={{ user, error, login, register, logout, changePassword, signInWithGoogle, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
