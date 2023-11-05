// Importações padrões
import React, { useContext } from "react"
import './Start.css'

// Importando a Navegação do projeto
import { Navigate } from "react-router-dom"

// Importando os componentes para a tela
import ButtonLogin from "../../components/ButtonLogin-component/ButtonLogin"
import ButtonRegister from "../../components/ButtonRegister-component/ButtonRegister"

// Importando a autentificação
import { AuthGoogleContext } from "../../contexts/authGoogle"

// Componente principal para a tela de inicio
export default function Start_Screen() {
    const { signed } = useContext(AuthGoogleContext);

    if (signed) {
        return <Navigate to="/home" />
    }
    else {
        return (
            <>
                <main id="main_start">
                    <div className="container">
                        <h1>Seja bem-vindo ao NOME DO APP</h1>
                        <p>Lorem ipsum dolor sit amet. Ad minima voluptatum aut volupt explicabo exercitationem ia. Ut incidu peros as</p>
                        <ButtonLogin />
                        <ButtonRegister />
                    </div>
                </main>
            </>
        )
    }

}