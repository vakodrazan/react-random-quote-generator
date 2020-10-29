import React, { useEffect } from 'react';

export default function RandomQuotes({quotes, setQuotes}) {

    const handleClick = () => {
        console.log(quotes);
        // const randomNumber = Math.floor(Math.random() * quotes.length);
        // setQuotes(randomNumber)
    }
    return (
        <button onClick={handleClick}>Random</button>
    )
}