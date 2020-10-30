import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function AuthorQuotes() {
    const [authorQuotes, setAuthorQuotes] = useState([]);
    const {authorName} = useParams();

    const BASE_URL = "https://quote-garden.herokuapp.com/api/v2/authors/";
    const END_URL = "?page=1&limit=10"


    const fetchQoutes = async () => {
        try{
            const res = await fetch(BASE_URL + authorName + END_URL);
            const data = await res.json();
            setAuthorQuotes(data.quotes);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchQoutes();

    }, [authorName]);

    return (
        <blockquote>
            <h3>
                <cite>
                    {authorName}
                </cite>
            </h3>
            {authorQuotes.length === 0 && <h2>Loading...</h2>}
            {authorQuotes.map(quote => (
                <p key={quote._id}>
                    <q>{quote.quoteText}</q>
                </p>
            ))}
        </blockquote>
    )
}