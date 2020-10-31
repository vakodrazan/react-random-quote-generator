import React from 'react';
import { Link } from 'react-router-dom';

const arrowRightIcon = <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>

export default function Quotes({quotes}) {
    return (
        <div>
            {quotes.length === 0 
                ? <h2>Loading...</h2> 
                : <blockquote>
                    <p>
                        <q>{quotes.quoteText}</q>
                    </p>
                    <Link className="link" to={`/authors/${quotes.quoteAuthor}`}>
                        <footer>
                            <p className="cites">
                                <strong>{quotes.quoteAuthor}</strong> 
                                <cite className="genre">{quotes.quoteGenre}</cite>
                            </p>
                            <p className="arrow">{arrowRightIcon}</p>
                        </footer>
                    </Link>
                </blockquote>
            }
        </div>
    )
}