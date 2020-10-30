import React from 'react';
import { Link } from 'react-router-dom';

export default function Quotes({quotes}) {
    return (
        <blockquote>
            {quotes.length === 0 && <h2>Loading...</h2>}
            <p>{quotes.quoteText}</p>
            <Link to={`/authors/${quotes.quoteAuthor}`}>
                <footer>
                    <span>{quotes.quoteAuthor}</span> <cite>{quotes.quoteGenre}</cite>
                </footer>
            </Link>
        </blockquote>
    )
}