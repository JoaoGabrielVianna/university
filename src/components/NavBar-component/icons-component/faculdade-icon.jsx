import React from "react";
import icon_a from "../../../assets/svgs/faculdade-icon-a.svg";
import icon_d from "../../../assets/svgs/faculdade-icon-d.svg";

export default function Faculdade_Icon({ativado = false}){
    return(
        <>
            <img src={ativado === true ? icon_a : icon_d} alt="" />
        </>
    )
}