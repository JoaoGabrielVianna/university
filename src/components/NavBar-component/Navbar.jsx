import React, { useState } from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";
import Faculdade_Icon from "./icons-component/faculdade-icon";
import Destaques_Icon from "./icons-component/destaques-icon";
import Home_Icon from "./icons-component/home-icon";
import Eventos_Icon from "./icons-component/eventos-icon";
import Profile_Icon from "./icons-component/profile-icon";
import Indicator_Icon from "./icons-component/indicator";



export default function NavBar() {
    const [active, setActive] = useState(2);
    const icons = [
        { nome: 'faculdade', local: '#', icon_a: <Faculdade_Icon ativado />, icon_d: <Faculdade_Icon />, posX: 1.7 },
        { nome: 'destaques', local: '#', icon_a: <Destaques_Icon ativado />, icon_d: <Destaques_Icon />, posX: 21 },
        { nome: 'home', local: '/home', icon_a: <Home_Icon ativado />, icon_d: <Home_Icon />, posX: 40 },
        { nome: 'eventos', local: '#', icon_a: <Eventos_Icon ativado />, icon_d: <Eventos_Icon />, posX: 59.7 },
        { nome: 'profile', local: '/profile', icon_a: <Profile_Icon ativado />, icon_d: <Profile_Icon />, posX: 78.8 },
    ]

    return (
        <>

            <main id="main_navbar">
                
                <div className="space">
                    
                    <div className="icons_background">
                    <span style={{ left: `${icons[active].posX}%` }}><Indicator_Icon /></span>
                        {icons.map((id, i) => (
                            <li key={i} className="icon">
                                {/* {active} */}
                                <Link className="Link" to={id.local} onClick={() => setActive(i)}>
                                    {active === i ? id.icon_a : id.icon_d}
                                </Link>

                            </li>
                        ))}


                    </div>

                </div>


            </main>
        </>
    )
}