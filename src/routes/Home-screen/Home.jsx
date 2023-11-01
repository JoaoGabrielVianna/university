import React, { useContext } from "react";
import './Home.css'
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default function Home_Screen(){
    const { user, signOut } = useContext(AuthGoogleContext)
    const userLogado = JSON.parse(user)
    console.log(userLogado.displayName)
    return(
        <>
            <h1>TELA HOME</h1>
            <p>BEM VINDO <br/><span style={{color: 'green'}}>{userLogado.displayName}</span></p>
            <button onClick={() => signOut()} style={{color: 'black', width: 100, height:50}}>SAIR</button>
        </>
    )
}