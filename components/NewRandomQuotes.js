import React from 'react';

export default function NewRandomQuotes() {

    const handleClick = () => {
        window.location.reload();
    }

    return (
        <button onClick={handleClick}>Random</button>
    )
}