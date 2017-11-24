import React from 'react';
import {StarRaiting} from "../raiting/starRating";

export function BookFooter({book}) {
    return (
        <div className='footer'>
            <div className='listen'/>
            <div className='comments'>11</div>
            <div className="fav selected">52</div>
        </div>
    )
}