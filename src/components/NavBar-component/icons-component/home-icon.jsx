import React from "react";
import icon_a from "../../../assets/svgs/home-icon-a.svg";
import icon_d from "../../../assets/svgs/home-icon-d.svg";

export default function Home_Icon({ativado = false}){
    return(
        <>
            <img src={ativado === true ? icon_a : icon_d} alt="" />
        </>
    )
}