import React,{ createContext,useEffect, useState, useContext } from 'react';
import firebase from "firebase/app";
import { auth } from '../utils/firebase';

interface IAuthContext {
  User: firebase.User | null | undefined;
}
const AuthContext = createContext<IAuthContext>({User: undefined});

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children}){
  const [user, setUser] = useState('');

	useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => {
      unsubscribed();
    };
  }, []);
  const value = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
