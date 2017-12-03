import {BookList} from "./BooksList";
import {connect} from "react-redux";
import {fetchBooks} from "../../actions";
import {take} from "lodash";
import * as React from "react";
import {withRouter} from "react-router-dom";

const PAGE_SIZE = 10;


class BookListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }

    fetchBooks = (page) => {
        console.log(page);
        if ((page-1) * PAGE_SIZE > this.props.books.length) {
            return
        }
        this.setState({page: page})
    };

    hasMore = () => {
        console.log('has more');
        return this.state.page <= 2;
    };

    render() {

        return (
            <BookList books={take(this.props.books, this.state.page * PAGE_SIZE)} fetchBooks={this.fetchBooks}
                      hasMore={this.hasMore}/>)
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.list
    };
};

const mapDispatchToProps = {
    fetchBooks
};

export default withRouter(connect(mapStateToProps)(BookListComponent))