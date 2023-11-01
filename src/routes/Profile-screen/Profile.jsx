import React, { useContext } from "react";
import "./Profile.css"
import GoBack_icon from "../../icons/goback-icon/GoBack";
import { AuthGoogleContext } from "../../contexts/authGoogle";


export default function Profile_Screen() {
    const { user, signOut } = useContext(AuthGoogleContext)
    const userLogado = JSON.parse(user)
    return (
        <>
            <main id="main_profile">
                <header>
                    <div className="one">
                        <h1>{userLogado.displayName}</h1>
                    </div>
                    <div className="two" onClick={()=> signOut()}><GoBack_icon orientation="right"/></div>
                </header>
            </main>
        </>
    )
}