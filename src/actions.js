export const fetchBooksSuccess = (books) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    books
});

export const fetchBooks = (page) => ({
    type: 'FETCH_BOOKS',
    page
});


export const orderChanged = (order) => ({
    type: 'ORDER_CHANGED',
    order
});