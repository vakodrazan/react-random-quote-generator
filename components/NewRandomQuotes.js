import React, { useState } from 'react';
import refreshIcon from '../assets/refresh.svg';

export default function NewRandomQuotes({fetchQoutes}) {
    function  handleClick() {
        fetchQoutes();
    }


    return (
        <button 
            onClick={handleClick} 
            className="random"
        >
            Random
            <img src={refreshIcon} alt="Refresh Icon" />
        </button>
    )
}