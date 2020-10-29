import React, { useEffect, useState } from 'react';
import Quotes from './components/Quote';
import RandomQuotes from './components/RandomQuotes';

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
        fetchGoutes();

    }, []);
    console.log(quotes);
    
    return (
        <section>
            <Quotes quotes={quotes} />
            <RandomQuotes setQuotes={setQuotes} quotes={quotes} />
        </section>
    )
}