import React from "react";
import icon_a from "../../../assets/svgs/eventos-icon-a.svg";
import icon_d from "../../../assets/svgs/eventos-icon-d.svg";

export default function Eventos_Icon({ativado = false}){
    return(
        <>
            <img src={ativado === true ? icon_a : icon_d} alt="" />
        </>
    )
}