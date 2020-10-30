import React, { useEffect, useState } from 'react';
import Quotes from './Quote';
import RandomQuotes from './RandomQuotes';

export default function QuotesRandomly() {
    const [quotes, setQuotes] = useState([]);

    const fetchQoutes = async () => {
        try{
            const res = await fetch("https://quote-garden.herokuapp.com/api/v2/quotes/random");
            const randomQuotes = await res.json();
            setQuotes(randomQuotes.quote);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchQoutes();

    }, []);
    console.log(quotes);
    
    return (
        <section>
            <Quotes quotes={quotes} />
            <RandomQuotes setQuotes={setQuotes} quotes={quotes} />
        </section>
    )
}