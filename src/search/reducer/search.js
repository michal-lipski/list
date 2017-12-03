export default function search(state = {order: undefined, query: '', filter: undefined}, action) {
    switch (action.type) {
        case 'ORDER_CHANGED':
            return {...state, order: action.order};
            break;
        default:
            return state
    }
}
