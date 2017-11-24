import React from 'react';
import {BookItem} from "./BookItem";
import {BookList} from "./BooksList";
import {connect} from "react-redux";


function mapStateToProps(state) {
    return {books: state.books};
}

export default connect(mapStateToProps)(BookList)