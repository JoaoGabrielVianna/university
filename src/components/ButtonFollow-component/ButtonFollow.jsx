import React from "react";
import seguir_icon from "../../assets/svgs/seguir-icon.svg";
import seguindo_icon from "../../assets/svgs/seguindo-icon.svg";

export default function ButtonFollow({ seguindo = false }) {
    return (
        <>
            {seguindo ? <img src={seguindo_icon} alt="" />
                : <img src={seguir_icon} alt=""/>
            }
        </>
    )
}