import React, { useContext, useState } from "react";
import './Home.css'
import { AuthGoogleContext } from "../../contexts/authGoogle";
import search_icon from "../../assets/svgs/search-icon.svg";
import arrow_icon from "../../assets/svgs/arrow-icon.svg";
import notification_icon from "../../assets/svgs/notification-icon.svg";

export default function Home_Screen() {
    const [showfaculdades, setShowfaculdades] = useState(false)
    const { user, signOut } = useContext(AuthGoogleContext)
    const userLogado = JSON.parse(user)
    return (
        <>
            <main id="main_home">
                <header>
                    <div className="div1">
                        <div id="searchBar">
                            <span><img src={search_icon} alt="" /></span>

                            <input placeholder="Pesquisar" />
                        </div>
                        <span><img src={notification_icon} alt="" /></span>
                    </div>

                    <div className="faculdades">
                        <span className="header">
                            <h1>Faculdades</h1>
                            <div onClick={() => setShowfaculdades(!showfaculdades)}>
                                <img src={arrow_icon} alt="" />
                            </div>

                        </span>


                    </div>
                    
                </header>
                <span className="body" style={{ height: showfaculdades ? "150px" : "0" }}>

                    </span>
                <h1>TELA HOME</h1>


            </main>

        </>
    )
}