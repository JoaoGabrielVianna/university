import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import InputBox from "../../components/InputBox-component/InputBox";
import ButtonLogin from "../../components/ButtonLogin-component/ButtonLogin";
import Email_icon from "../../icons/email-icon/Email";
import Password_icon from "../../icons/password-icon/Password";
import GoBack_icon from "../../icons/goback-icon/GoBack";
import { app } from "../../services/firebaseConfig";
import google from '../../assets/imgs/google-icon.png';
import facebook from '../../assets/imgs/facebook-icon.png'
import mobile from '../../assets/imgs/mobile-icon.png'
import outlook from '../../assets/imgs/outlook-icon.png'


const provider = new GoogleAuthProvider();




export default function Login_Screen() {
    const auth = getAuth(app);

    const signInGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user)

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }


    
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
                            <a><img src={google} alt=""  onClick={signInGoogle}/></a>
                            <a><img src={facebook} alt=""  onClick={() => {}}/></a>
                            <a><img src={mobile} alt=""  onClick={() => {}}/></a>
                            <a><img src={outlook} alt=""  onClick={() => {}}/></a>
                        </div>
                    </main>

                    <span></span>
                    <ButtonLogin />
                </div>
            </main>
        </>
    )
}

