import React from 'react';

export default function Quotes({quotes}) {
    return (
        <blockquote>
            {quotes.length === 0 && <h2>Loading...</h2>}
            <p>{quotes.quoteText}</p>
            <footer>
                <span>{quotes.quoteAuthor}</span> <cite>{quotes.quoteGenre}</cite>
            </footer>
        </blockquote>
    )
}