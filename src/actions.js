export const fetchBooksSuccess = (books) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    books
});

export const fetchBooks = () => ({
    type: 'FETCH_BOOKS',
});