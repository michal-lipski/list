import React from 'react';
import {render, shallow} from 'enzyme';
import {StarRating} from "./starRating";

describe('star rating', () => {

    it('renders full stars by rating', () => {

        let element = render(<StarRating rating={4}/>);

        expect(element.find('.full.selected').length).toEqual(4);
        expect(element.find('.star').length).toEqual(5);
    });

    it('renders half stars rating', () => {

        let element = render(<StarRating rating={4.5}/>);

        expect(element.find('.full.selected').length).toEqual(4);
        expect(element.find('.half.selected').length).toEqual(1);
        expect(element.find('.star.full').length).toEqual(5);
    });

    it('does not render half stars rating when rating less than half', () => {

        let element = render(<StarRating rating={4.49}/>);

        expect(element.find('.half').length).toEqual(0);
    });
});

describe('rating value', () => {
    it('is displayed', () => {
        let element = shallow(<StarRating rating={4.49}/>);

        expect(element.find('.rating-number').text()).toEqual("4.49");

    })
});


describe('number of votes', () => {
    it('is displayed', () => {
        let element = shallow(<StarRating rating={4.49} votes={123}/>);

        expect(element.find('.rating-votes').text()).toEqual("123 ocen");

    })
});



