import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import BookListComponent from './books/list/BooksListComponent'
import {Header} from "./header/Header";
import {connect} from "react-redux";
import {fetchBooks} from "./actions";
import {header} from 'http-client'
import * as axios from "axios";
import searchBooks from "./AjaxRequest"

class App extends Component {


    componentDidMount() {
        this.props.fetchBooks(1);

        // axios({
        //     url: "https://wrapapi.com/use/kiwaczki/lublimyczytac/lubimyczytac/latest",
        //     method: 'post',
        //     data: {
        //         "wrapAPIKey": "ZGhFmQd3iLCcUTAtcSbX0YSbkMip9W7l",
        //         "title": "cień wiatru"
        //     }
        // }).then(function (data) {
        //     console.log(data.data.data.output[0]);
        // });
        //
        //
        // searchBooks("Cien+wiatru");

    };

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <Header/>
                <div className="content">
                    <BookListComponent/>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = {
    fetchBooks
};

export default connect(null, mapDispatchToProps)(App);
