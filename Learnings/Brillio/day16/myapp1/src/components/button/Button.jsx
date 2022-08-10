import React from 'react';
const Button =({onClick, label }) => {
    return(
        <button className="my-button" onClick={onClick}>
            {label}
            </button>
    );
};
export default Button;