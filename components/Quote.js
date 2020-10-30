import React from 'react';
import { Link } from 'react-router-dom';

export default function Quotes({quotes}) {
    return (
        <div>
            {quotes.length === 0 ? <h2>Loading...</h2> 
            : <blockquote>
                <p>
                    <q>{quotes.quoteText}</q>
                </p>
                <Link to={`/authors/${quotes.quoteAuthor}`}>
                    <footer>
                        <span>{quotes.quoteAuthor}</span> <cite>{quotes.quoteGenre}</cite>
                    </footer>
                </Link>
            </blockquote>
            }
        </div>
    )
}