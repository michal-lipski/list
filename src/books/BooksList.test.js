import React from 'react';
import {render, shallow} from 'enzyme';
import {BookList} from "./BooksList";
import * as cheerio from "cheerio";

it('renders without crashing', () => {
    let books = [{id: '1'}, {id: '2'}, {id: '3'}];

    let element = render(<BookList books={books}/>);

    expect(element.find('.item').length).toEqual(3);
});

it('renders without crashing', () => {
    let $ = cheerio.load('http://lubimyczytac.pl/ksiazka/4802748/cien-wiatru')


    var header = $('#rating-value')

    console.log('aa'+ header.text()); // Output the data in the terminal
});
