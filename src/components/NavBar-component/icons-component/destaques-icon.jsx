import React from "react";
import icon_a from "../../../assets/svgs/destaques-icon-a.svg";
import icon_d from "../../../assets/svgs/destaques-icon-d.svg";

export default function Destaques_Icon({ativado = false}){
    return(
        <>
            <img src={ativado === true ? icon_a : icon_d} alt="" />
        </>
    )
}