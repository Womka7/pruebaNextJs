import React from "react";
import { InputProps } from "../types/InputTypes";

const Input: React.FC<InputProps> = ({ label, value, onChange, type = "text", placeholder, className }) => {
    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <input 
                type={type} 
                value={value} 
                onChange={onChange} 
                placeholder={placeholder} 
                className="input-class"
            />
        </div>
    );
}

export default Input;