import React, { useEffect, useState } from "react";
import AppNavigation from "./src/routes/AppNavigation";
import { AuthProvider } from "./src/context/AuthContext";
import * as Font from 'expo-font';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() =>{
    if (!fontsLoaded){
      Font.loadAsync({
        'varela-round': require('./assets/fonts/VarelaRound-Regular.ttf')
      })
    }
  })
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  );
}
