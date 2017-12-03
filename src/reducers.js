import books from "./books/reducer/books";
import {combineReducers} from "redux";

export const reducers = combineReducers(
    {books}
);