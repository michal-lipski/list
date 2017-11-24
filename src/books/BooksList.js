import React from 'react';
import {BookItem} from "./BookItem";

export function BookList({books}) {
    return (
        <div className='items'>
            {books.map((book) => (<BookItem book={book} key={book.id}/>))}
        </div>)
}