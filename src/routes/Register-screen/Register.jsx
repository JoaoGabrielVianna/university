import React from "react"
import './Register.css'
import InputBox from "../../components/InputBox-component/InputBox"
import Email_icon from "../../icons/email-icon/Email"
import Password_icon from "../../icons/password-icon/Password"
import ButtonRegister from "../../components/ButtonRegister-component/ButtonRegister"


export default function Register_Screen(){
    return(
        <>
            <main id="main_register">
                <div className="container">
                    <InputBox text="Digite seu e-mail..." icon={<Email_icon />} />
                    <InputBox text="Digite sua senha..." icon={<Password_icon />} />
                    <span></span>
                    <ButtonRegister ativo/>
                </div>
            </main>
        </>
    )
}

