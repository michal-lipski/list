const defaultBooks = [
    {id: '1',title:'Cień wiatru',gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '2',title:'Cień wiatru',gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '3',title:'Cień wiatru',gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'},
    {id: '4',title:'Cień wiatru',gene:'literatura piękna',description:'Infinitely load content using a React Component. This fork maintains a simple, lightweight infinite scroll package that supports both window and scrollable elements package that supports both window and scrollable elements.'}
];

export default function books(state = defaultBooks, action) {
    switch (action.type) {
        case 'FETCH_BOOKS_SUCCESS':
            state = action.books;
            break;
        default:
            return state
    }
}
