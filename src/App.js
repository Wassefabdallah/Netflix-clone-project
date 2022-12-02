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
import {useDispatch, useSelector} from "react-redux"
import { login, logout, selectuser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectuser); //to return the user if it exixts or null if otherwise.
  const dispatch = useDispatch();

  // TO LET THE BROWSER KNOW THAT WE ARE LOGGED IN AND DOES NOT LOG OUT WHEN WE REFRESH THE PAGE
  //                      *** keep the user logged in after sign up***
  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }else {
        //logged out
        dispatch(logout())
      }
    });

    return unsubscribe;
  }, [dispatch])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path='/profile' element={ <ProfileScreen/>} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
