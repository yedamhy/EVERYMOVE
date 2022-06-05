import React from "react";
import { useState } from "react";
import Graph2_1 from "./Graph2_1";


function Btn(){

    const[visible, setVisible] = useState(false);

    const btnStyle = {
        color: "white",
        fontWeight: "bold",
        background: "rgb(42, 153, 116)",
        padding: ".375rem .75rem",
        border: "1px solid rgb(42, 153, 116)",
        borderRadius: ".25rem",
        fontSize: "1rem",
        lineHeight: 1.5,
        position: 'relative',
        zIndex: "1000",
        left: "89%",
        top: '-7vh',
    };
    
    return(
        <div>
            <button id="btn" style={btnStyle} 
            onClick={ () => {
                setVisible(!visible);
                }}>
            {visible ? "관리자모드 off" : "관리자모드 on"}
            
        </button>
            {visible && <Graph2_1/>}
        </div>
    )
}

export default Btn;