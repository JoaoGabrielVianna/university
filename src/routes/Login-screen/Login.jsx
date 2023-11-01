import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";

import './Login.css';

import InputBox from "../../components/InputBox-component/InputBox";
import ButtonLogin from "../../components/ButtonLogin-component/ButtonLogin";
import Email_icon from "../../icons/email-icon/Email";
import Password_icon from "../../icons/password-icon/Password";
import GoBack_icon from "../../icons/goback-icon/GoBack";
import google from '../../assets/imgs/google-icon.png';
import facebook from '../../assets/imgs/facebook-icon.png'
import mobile from '../../assets/imgs/mobile-icon.png'
import outlook from '../../assets/imgs/outlook-icon.png'
import { AuthGoogleContext } from "../../contexts/authGoogle";




export default function Login_Screen() {
    const { signInGoogle, signed } = useContext(AuthGoogleContext)

    if(signed){
        return <Navigate to="/home"/>
    }
    else{
    return (
        <>
            <main id="main_login">
                <Link to={'/'} className="goback_icon"><GoBack_icon /></Link>
                <div className="container">
                    <InputBox uid="email_login" text="Digite seu e-mail..." icon={<Email_icon />} />
                    <InputBox uid="senha_login" text="Digite sua senha..." icon={<Password_icon />} />

                    <main id="main_socialLogin">
                        <div className="line">
                            <span></span>
                            <h1>OU</h1>
                            <span></span>
                        </div>
                        <div className="icons">
                            <a><img src={google} alt="" onClick={() => signInGoogle()} /></a>
                            <a style={{ opacity: 0.3 }}><img src={facebook} alt="" onClick={() => { }} /></a>
                            <a style={{ opacity: 0.3 }}><img src={mobile} alt="" onClick={() => { }} /></a>
                            <a style={{ opacity: 0.3 }}><img src={outlook} alt="" onClick={() => { }} /></a>
                        </div>
                    </main>

                    <span></span>
                    <ButtonLogin />
                </div>
            </main>
        </>
    )
    }
}

