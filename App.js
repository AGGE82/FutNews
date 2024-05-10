import React from "react"
import AppNavigation from "./src/routes/AppNavigation";
<<<<<<< HEAD
//import { AuthProvider } from "./src/context/AuthContext";

export default function App(){
  return <AuthProvider>
             <AppNavigation />
      </AuthProvider>
=======
//import { AuthProvider } from "./src/context/authContext/AuthContext";

export default function App(){
  return (
      <AppNavigation />
)
>>>>>>> authContext
}