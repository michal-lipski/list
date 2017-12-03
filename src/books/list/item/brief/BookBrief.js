import React from 'react';
import {StarRating} from "./raiting/starRating";

export function BookBrief({book}) {
    return (
        <div className='brief'>
            <div className='title'>{book.title}</div>
            <div className='gene'>{book.gene}</div>
            <StarRating rating={book.rating} votes={book.votes}/>
            <div className='description'>{book.description}</div>
        </div>
    )
}