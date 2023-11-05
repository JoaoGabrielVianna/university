// Importações padrões
import React, { useContext, useState } from "react"
import './Register.css'

// Importando a Navegação do projeto
import { Navigate } from "react-router-dom"

// Importando os componentes para a tela
import GoBack_icon from "../../icons/goback-icon/GoBack"
import InputBox from "../../components/InputBox-component/InputBox"
import Email_icon from "../../icons/email-icon/Email"
import Password_icon from "../../icons/password-icon/Password"
import SocialLogin from "../../components/SocialLogin-component/SocialLogin"
import ButtonRegister from "../../components/ButtonRegister-component/ButtonRegister"

// Importando a autentificação
import { AuthGoogleContext } from "../../contexts/authGoogle"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { auth } from "../../services/firebaseConfig"



export default function Register_Screen() {
    // Registro com Email e senha
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    async function loginEmailSenha() {
        createUserWithEmailAndPassword(email, password)
    }

    if (loading) {
        return <p>Loading...</p>;
    }
    // =============================================================

    const { signed } = useContext(AuthGoogleContext);

    if (signed) {
        return <Navigate to="/home" />
    }
    else {
        return (
            <>
                <main id="main_register">
                    <GoBack_icon link="/" />
                    <div className="container">
                        <InputBox text="Digite seu e-mail..." icon={<Email_icon />} onChange={(e) => setEmail(e.target.value)} />
                        <InputBox text="Digite sua senha..." icon={<Password_icon />} onChange={(e) => setPassword(e.target.value)} />
                        <SocialLogin />
                        <div onClick={loginEmailSenha}>
                            <ButtonRegister ativo />
                        </div>
                    </div>
                </main>
            </>
        )
    }

}

