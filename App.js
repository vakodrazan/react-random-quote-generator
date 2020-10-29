import React, { useEffect, useState } from 'react';

export default function App() {
    const [quotes, setQuotes] = useState([]);

    const fetchGoutes = async () => {
        try{
            const res = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
            const randomQuotes = await res.json();
            setQuotes(randomQuotes.quote);
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        fetchGoutes()
    }, []);
    // if (!quotes.quoteText) return null;
    console.log(quotes);
    
    return (
        <h1>Hello {quotes.quoteText}</h1>
    )
}