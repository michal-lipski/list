import React from 'react';
import {render, shallow} from 'enzyme';
import {BookList} from "./BooksList";

it('renders without crashing', () => {
    let books = [{id: '1'}, {id: '2'}, {id: '3'}];

    let element = render(<BookList books={books}/>);

    expect(element.find('.item').length).toEqual(3);
});

it('new books have ribbon', () => {
    let books = [{id: '1', date: new Date()}];

    let element = render(<BookList books={books}/>);

    expect(element.find('.ribbon')).toBeDefined();
});

