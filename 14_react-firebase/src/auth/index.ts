import firebase from "firebase/app";
import { createContext, useEffect, useState } from "react";

// Contextの型を用意
interface IAuthContext {
  currentUser: firebase.User | null | undefined;
}

// Contextを宣言。Contextの中身を {currentUser: undefined} と定義
export const AuthContext = createContext<IAuthContext>({
  currentUser: undefined,
});
import auth from "../util/firebase";

const AuthProvider = (props: any) => {
  // Contextに持たせるcurrentUserは内部的にはuseStateで管理
  const [currentUser, setCurrentUser] = useState<
    firebase.User | null | undefined
  >(undefined);

  useEffect(() => {
    // Firebase Authのメソッド。ログイン状態が変化すると呼び出される
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  return <AuthContext.Provider>{props}</AuthContext.Provider>;
};

export { AuthProvider };
