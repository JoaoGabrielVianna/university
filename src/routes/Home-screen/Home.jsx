import React, { useContext } from "react";
import './Home.css'
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar-component/Navbar";

export default function Home_Screen(){
    const { user, signOut } = useContext(AuthGoogleContext)
    const userLogado = JSON.parse(user)
    return(
        <>
            <main id="main_home">
            <h1>TELA HOME</h1>
        
            
            </main>
            
        </>
    )
}