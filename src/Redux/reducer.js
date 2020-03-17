import * as actionTypes from './actions'

const initialState = {
    DISPLAY: 'Home',
    THEME: 'DEFAULT'
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.SET_DISPLAY:
        return {
            ...state,
            DISPLAY: action.DISPLAY
        }
        default:
            return state
    }
}

export default reducer