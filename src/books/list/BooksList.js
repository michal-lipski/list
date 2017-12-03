import React from 'react';
import {BookItem} from "./item/BookItem";
import InfiniteScroll from 'react-infinite-scroller';

export function BookList({books, fetchBooks, hasMore}) {

    return (
        <InfiniteScroll
            pageStart={1}
            loadMore={fetchBooks}
            hasMore={hasMore}>
            <div className='items'>

                {books.map((book) => (<BookItem book={book} key={book.id}/>))}


            </div>
        </InfiniteScroll>
    )
}
