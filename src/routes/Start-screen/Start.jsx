import React from "react"
import './Start.css'
import { Link } from "react-router-dom"
import ButtonLogin from "../../components/ButtonLogin-component/ButtonLogin"
import ButtonRegister from "../../components/ButtonRegister-component/ButtonRegister"




export default function Start_Screen() {


    return (
        <>
            <main id="main_start">
                <div className="container">
                    <h1>Seja bem-vindo ao NOME DO APP</h1>
                    <p>Lorem ipsum dolor sit amet. Ad minima voluptatum aut volupt explicabo exercitationem ia. Ut incidu peros as</p>
                    <Link to={'/login'}><ButtonLogin /></Link>
                    <Link to={'/register'}><ButtonRegister /></Link>
                </div>
            </main>
        </>
    )
}