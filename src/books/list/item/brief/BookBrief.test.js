import React from 'react';
import {render, shallow} from 'enzyme';
import {BookList} from "../../BooksList";
import {BookBrief} from "./BookBrief";

it('displays title', () => {
    let book = {id: '1', title:'Cień wiatru'};

    let element = render(<BookBrief book={book}/>);

    expect(element.find('.title').text()).toEqual('Cień wiatru');
});

it('displays gene', () => {
    let book = {id: '1', gene:'literatura piękna'};

    let element = render(<BookBrief book={book}/>);

    expect(element.find('.gene').text()).toEqual('literatura piękna');
});

it('displays description', () => {
    let book = {id: '1', description:'Infinitely load content using a React Component. This fork maintains a simple, ' +
    'lightweight infinite scroll package that supports both window and scrollable ' +
    'elements.'};

    let element = render(<BookBrief book={book}/>);

    expect(element.find('.description').text()).toEqual(book.description);
});