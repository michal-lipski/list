import * as React from "react";
import {orderChanged} from "../actions";
import {connect} from "react-redux";

const Ordering = (props) => {

    function changeOrdering(event) {
        props.orderChanged(event.target.value)
    }


    return (
        <div className='ordering'>
            <select onChange={changeOrdering}>
                <option value="date">najnowsze</option>
                <option value="rating">najwyżej oceniane</option>
            </select>
        </div>
    )
};


function mapStateToProps(state) {
    return {ordering: state.ordering}
}

const mapDispatchToProps={
    orderChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Ordering)