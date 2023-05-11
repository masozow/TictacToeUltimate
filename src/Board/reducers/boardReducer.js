export const INITIAL_STATE = [
    { id: 0, value: '' },
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
    { id: 5, value: '' },
    { id: 6, value: '' },
    { id: 7, value: '' },
    { id: 8, value: '' },
]

export const actionTypes = Object.freeze({
    UPDATE_VALUE: 'UPDATE_VALUE'
})
export const boardReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_VALUE:
            const actualIndex = state.findIndex(posAndVal => posAndVal.id === action.payload.id);
            const newState = [...state];
            newState[actualIndex].value = action.payload.value;
            return newState;
        default:
            return state;
    }
}