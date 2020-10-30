import React from 'react';
import { Link } from 'react-router-dom';

export default function NewRandomQuotes() {

    function  handleClick() {
        console.log("Click me");
    }

    return (
        <button onClick={handleClick} >Random</button>
    )
}