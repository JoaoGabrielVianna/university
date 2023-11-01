import React from "react";
import icon_a from "../../../assets/svgs/profile-icon-a.svg";
import icon_d from "../../../assets/svgs/profile-icon-d.svg";

export default function Profile_Icon({ativado = false}){
    return(
        <>
            <img src={ativado === true ? icon_a : icon_d} alt="" />
        </>
    )
}