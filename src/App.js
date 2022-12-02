import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
}from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';


function App() {
  const user = null;

  // TO LET THE BROWSER KNOW THAT WE ARE LOGGED IN AND DOES NOT LOG OUT WHEN WE REFRESH THE PAGE
  //                      *** keep the user logged in after sign up***
  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        console.log(userAuth);
      }else {
        //logged out
      }
    });

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
