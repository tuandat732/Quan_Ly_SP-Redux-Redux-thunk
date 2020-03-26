import * as types from '../constants/actionsType'

const initState = [];

const reducer = (state=initState,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            return action.products
        default:
            return state
    }
}

export default reducer