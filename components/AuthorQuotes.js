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
            {authorQuotes.map(quote => (
                <div key={quote._id}>
                    <p><q>{quote.quoteText}</q></p>
                </div>
            ))}
        </blockquote>
    )
}