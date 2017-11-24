import * as React from "react";
import {SearchInput} from "../search/SearchInput";
import {Ordering} from "../search/Ordering";
import {Filtering} from "../search/Filtering";

export const Header = function () {
    return (
        <div className="header">
            <SearchInput/>
            <Ordering/>
            <Filtering/>
        </div>

    )
};