import React from "react";
import { Link } from "react-router-dom";
import './Login.css';
import InputBox from "../../components/InputBox-component/InputBox";
import ButtonLogin from "../../components/ButtonLogin-component/ButtonLogin";
import ButtonRegister from "../../components/ButtonRegister-component/ButtonRegister";
import Email_icon from "../../icons/email-icon/Email";
import Password_icon from "../../icons/password-icon/Password";


export default function Login_Screen() {
    return (
        <>
            <main id="main_login">
                <div className="container">
                    <InputBox text="Digite seu e-mail..." icon={<Email_icon />} />
                    <InputBox text="Digite sua senha..." icon={<Password_icon />} />
                    <span></span>
                    <ButtonLogin />
                    <Link to={'/register'}><ButtonRegister /></Link>
                </div>
            </main>
        </>
    )
}
