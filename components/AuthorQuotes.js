import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function AuthorQuotes() {
    const [authorQuotes, setAuthorQuotes] = useState([]);
    const {quoteAuthor} = useParams();
    console.log(quoteAuthor);

    const BASE_URL = "https://quote-garden.herokuapp.com/api/v2/authors/";
    const END_URL = "?page=1&limit=10"


    const fetchQoutes = async () => {
        const res = await fetch(BASE_URL + quoteAuthor + END_URL);
            try{
            console.log(res);
            const data = await res.json();
            setAuthorQuotes(data.quotes);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchQoutes();

    }, [quoteAuthor]);

    console.log(authorQuotes);

    return (
        <blockquote>
            <h3>
                <cite>
                    {quoteAuthor}
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