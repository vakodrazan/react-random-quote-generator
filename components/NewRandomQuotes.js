import React, { useState } from 'react';

export default function NewRandomQuotes({fetchQoutes}) {
    function  handleClick() {
        fetchQoutes();
    }


    return (
        <button onClick={handleClick} >Random</button>
    )
}