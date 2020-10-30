import React, { useEffect } from 'react';

export default function NewRandomQuotes({quotes, setQuotes}) {

    const handleClick = () => {
        console.log(quotes);
        setQuotes(quotes)
    }

    return (
        <button onClick={handleClick}>Random</button>
    )
}