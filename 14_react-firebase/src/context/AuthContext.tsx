import React from "react";
import firebase from "firebase/app";

interface IAuthContext {
  currentUser: firebase.User | null | undefined;
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
export const AuthContext = React.createContext<IAuthContext>({
  currentUser: undefined,
});
