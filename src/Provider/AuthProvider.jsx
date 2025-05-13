import React, { createContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = () => {
    const auth = getAuth(app);
  return <AuthContext></AuthContext>;
};

export default AuthProvider;
