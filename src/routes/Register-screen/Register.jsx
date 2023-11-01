import React, { useContext } from "react"
import './Register.css'
import { Link, Navigate } from "react-router-dom"
import GoBack_icon from "../../icons/goback-icon/GoBack"
import InputBox from "../../components/InputBox-component/InputBox"
import Email_icon from "../../icons/email-icon/Email"
import Password_icon from "../../icons/password-icon/Password"
import ButtonRegister from "../../components/ButtonRegister-component/ButtonRegister"
import { AuthGoogleContext } from "../../contexts/authGoogle"


export default function Register_Screen() {
    const { signed } = useContext(AuthGoogleContext)

    if (signed) {
        return <Navigate to="/home" />
    }
    else {
        return (
            <>
                <main id="main_register">
                    <Link to={'/'} className="goback_icon"><GoBack_icon /></Link>
                    <div className="container">
                        <InputBox text="Digite seu e-mail..." icon={<Email_icon />} />
                        <InputBox text="Digite sua senha..." icon={<Password_icon />} />
                        <span></span>
                        <ButtonRegister ativo />
                    </div>
                </main>
            </>
        )
    }

}

