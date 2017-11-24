import React from 'react';
import {BookBrief} from "./BookBrief";
import {BookFooter} from "./BookFooter";

export function BookItem({book}) {
    return (
        <div className='item'>
            <div style={{display: 'flex'}}>
                <img src={`img/${book.id}.jpg`} className='cover-image'/>
                <BookBrief book={book}/>
            </div>
            <div className="line"/>
            <BookFooter/>
        </div>
    )
}