import React from "react";
import { useState } from "react";
import HideGraph from "./HideGraph";



function Btn(){

    const[visible, setVisible] = useState(false);

    const btnStyle1 = {
        color: "white",
        fontWeight: "bold",
        background: "rgb(42, 153, 116)",
        padding: ".400rem 1.5rem",
        border: "1px solid rgb(42, 153, 116)",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        position: 'absolute',
        zIndex: "1000",
        left: "2%",
        top: '9vh',
        borderRadius: '15px'
    };
    const btnStyle2 = {
        color: "white",
        fontWeight: "bold",
        background: "rgb(42, 153, 116)",
        padding: ".400rem 2.2rem",
        border: "1px solid rgb(42, 153, 116)",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        position: 'relative',
        zIndex: "1000",
        left: "2%",
        top: '9vh',
        borderRadius: '15px'
    };
    
    return(
        <div>
            <button id="btn1" style={btnStyle1} 
            onClick={ () => {
                setVisible(!visible);
                }}>
            {visible ? "관리자모드 off" : "관리자모드 on"}
            </button>
            {visible && <HideGraph/>}
            <button id="btn2" style={btnStyle2} >
            더 알아보기
            </button>
        </div>
    )
}

export default Btn;