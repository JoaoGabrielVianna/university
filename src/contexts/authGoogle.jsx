import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../services/firebaseConfig";


const provider = new GoogleAuthProvider();

export const AuthGoogleContext = createContext({})

export const AuthGoogleProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);

    useEffect(() => {
        const loadStorageAuth = () => {
            const sessionToken = sessionStorage.getItem("@AuthFireBase:token");
            const sessionUser = sessionStorage.getItem("@AuthFireBase:user");

            if(sessionToken && sessionUser) {
                setUser(sessionUser);
            }
        };
        loadStorageAuth();
    })

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                setUser(user);
                sessionStorage.setItem("@AuthFireBase:token", token);
                sessionStorage.setItem("@AuthFireBase:user", JSON.stringify(user));
                console.log(user);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }
    return (
        <AuthGoogleContext.Provider
            value={{ signInGoogle, signed: !!user}}>
            {children}
        </AuthGoogleContext.Provider>
    )

}