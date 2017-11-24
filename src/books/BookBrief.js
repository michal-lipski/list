import React from 'react';
import {StarRaiting} from "../raiting/starRating";

export function BookBrief({book}) {
    return (
        <div className='brief'>
            <div className='title'>{book.title}</div>
            <div className='gene'>{book.gene}</div>
            <StarRaiting/>
            <div className='description'>{book.description}</div>
        </div>
    )
}