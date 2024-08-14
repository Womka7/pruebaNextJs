import React from "react";
import { IconProps } from "../types/IconTypes";

const Icon: React.FC<IconProps> =({ name, size = "24px", color = "black", className = "", onClick })=>{
    return (
        <i 
            className={`${name} ${className}`} 
            style={{ fontSize: size, color }} 
            onClick={onClick}
        >
        </i>
    );
}


export default Icon;