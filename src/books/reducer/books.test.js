import {orderChanged} from "../../actions";
import books from "./books";

describe('books reducer', () => {

    const someBooks = [
        {id: '1', rating: 4.15},
        {id: '2', rating: 4},
        {id: '3', rating: 3.0},
        {id: '4', rating: 4.25}
    ];


    it('is ordered by property', () => {
        const state = {list: someBooks};

        let newState = books(state, orderChanged('rating'));

        expect(newState.list).toEqual([
                {id: '4', rating: 4.25},
                {id: '1', rating: 4.15},
                {id: '2', rating: 4},
                {id: '3', rating: 3.0}
            ]
        )
    })

});




