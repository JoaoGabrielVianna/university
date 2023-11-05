import React, { useContext, useState } from "react";
import './Login.css';
import { Navigate } from "react-router-dom";
import InputBox from "../../components/InputBox-component/InputBox";
import ButtonLogin from "../../components/ButtonLogin-component/ButtonLogin";
import Email_icon from "../../icons/email-icon/Email";
import Password_icon from "../../icons/password-icon/Password";
import GoBack_icon from "../../icons/goback-icon/GoBack";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { auth } from "../../services/firebaseConfig";
import SocialLogin from "../../components/SocialLogin-component/SocialLogin";

export default function Login_Screen() {
    // Estado local para o email e senha
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const buttonloginClick = () => {
        
    }
    // Hook de autenticação com o Firebase
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    // Se estiver carregando a autentificação mostrar a tela de Loading
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        console.log(user);

    }

    // Função de login com a conta do Google
    const { signed } = useContext(AuthGoogleContext);


    // Se o usuário já está autenticado, redireciona para a página inicial
    if (signed) {
        return <Navigate to="/home" />
    }

    // Caso contrário, exibe o formulário de login
    else {
        return (
            <>
                <main id="main_login">
                    <GoBack_icon link="/" />
                    <div className="container">
                        <InputBox uid="email_login" text="Digite seu e-mail..." icon={<Email_icon />} onChange={(e) => setEmail(e.target.value)} />
                        <InputBox uid="senha_login" text="Digite sua senha..." icon={<Password_icon />} onChange={(e) => setPassword(e.target.value)} />
                        <SocialLogin />
                        <div onClick={() => buttonloginClick()}>  {/*signInWithEmailAndPassword(email, password)*/}
                            <ButtonLogin />
                        </div>
                    </div>
                </main>
            </>)
    }
}

