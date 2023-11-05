import React from "react";
import './InputBox.css';

export const InputBox_background = () => {
    return (
        <>
            <svg width="300" height="42" viewBox="0 0 300 42" fill="none" xmlns="http://www.w3.org/2000/svg" id="inputBox_background">
                <g filter="url(#filter0_i_236_1760)">
                    <path d="M0 14C0 6.26801 6.26801 0 14 0H286C293.732 0 300 6.26801 300 14V28C300 35.732 293.732 42 286 42H14C6.26802 42 0 35.732 0 28V14Z" fill="#E3E3E3" />
                </g>
                <defs>
                    <filter id="filter0_i_236_1760" x="0" y="0" width="300" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_236_1760" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default function InputBox({ text = 'Digite algo...', icon = '', uid = '', onChange = null}){
    return(
        <>
            <main id="main_inputBox">
                <InputBox_background/>
                <span  style={{backgroundColor: icon ? 'transparent' : '#0002'}}>{icon}</span>
                <input type="text" placeholder= {text} id={uid !== '' ? uid : null} onChange={onChange} />
            </main>
        </>
    )
}

