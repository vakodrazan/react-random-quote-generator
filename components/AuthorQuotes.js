import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const arrowLeftIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>


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
        <section>
            <Link to="/">
                <p>{arrowLeftIcon} Homepage</p>
            </Link>
            
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
        </section>
    )
}