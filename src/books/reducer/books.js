import {sortBy, first} from "lodash";

const defaultBooks = [
    {id: '1',title:'Cień wiatru 1', date:new Date(), rating:4.55,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '2',title:'Cień wiatru 2', date:new Date(), rating:4,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '3',title:'Cień wiatru 3', date:new Date(), rating:3.7,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '4',title:'Cień wiatru 4', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '5',title:'Cień wiatru 5', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '6',title:'Cień wiatru 6', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '7',title:'Cień wiatru 7', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '8',title:'Cień wiatru 7', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '9',title:'Cień wiatru 7', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '10',title:'Cień wiatru 7', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '11',title:'Cień wiatru 7', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '12',title:'Cień wiatru 8', date:new Date(), rating:4.25,votes:123, gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'}
];

export default function books(state = {list: defaultBooks, order: 'rating', page: 1}, action) {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            return {...state, list: action.books};
            break;
        case 'FETCH_BOOKS':
            return {...state, page:action.page};
            break;
        case 'ORDER_CHANGED':
            return {...state, order: action.order, list: sortBy(state.list, action.order, 'desc').reverse()};
            break;
        default:
            return state
    }
}
