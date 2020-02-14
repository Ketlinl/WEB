export const counterReducer = (initialState = { total: 0}, action) => {
    switch(action.type) {
        case 'INCREMENT':
        return { ...initialState, total: initialState.total + 1 };
        break;
        case 'DECREMENT':
        return { ...initialState, total: initialState.total - 1 };
        break;
        default:
            return initialState;
    }
}