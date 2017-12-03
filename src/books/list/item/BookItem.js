import React from 'react';
import {BookBrief} from "./brief/BookBrief";
import {BookFooter} from "./footer/BookFooter";
import Ribbon from "./ribbon/Ribbon";

export function BookItem({book}) {
    return (
        <div className='item'>
            <Ribbon title='New'/>
            <div style={{display: 'flex'}}>
                <img src={`img/${book.id}.jpg`} className='cover-image'/>
                <BookBrief book={book}/>
            </div>
            <div className="line"/>
            <BookFooter/>
        </div>
    )
}