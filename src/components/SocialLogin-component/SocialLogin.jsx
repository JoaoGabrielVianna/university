// Importações padrões
import React, { useContext } from "react";
import "./SocialLogin.css";


// Importando os componentes para a tela
import google from '../../assets/imgs/google-icon.png';
import facebook from '../../assets/imgs/facebook-icon.png';
import mobile from '../../assets/imgs/mobile-icon.png';
import outlook from '../../assets/imgs/outlook-icon.png';
import { AuthGoogleContext } from "../../contexts/authGoogle";

export default function SocialLogin() {
    // Função de login com a conta do Google
    const { signInGoogle } = useContext(AuthGoogleContext);

    async function loginGoogle() {
        await signInGoogle();
    }

    return (
        <>
            <main id="main_socialLogin">
                <div className="line">
                    <span></span>
                    <h1>OU</h1>
                    <span></span>
                </div>
                <div className="icons">
                    <a><img src={google} alt="" onClick={() => loginGoogle()} /></a>
                    <a style={{ opacity: 0.3 }}><img src={facebook} alt="" onClick={() => { }} /></a>
                    <a style={{ opacity: 0.3 }}><img src={mobile} alt="" onClick={() => { }} /></a>
                    <a style={{ opacity: 0.3 }}><img src={outlook} alt="" onClick={() => { }} /></a>
                </div>
            </main>
        </>
    )
}