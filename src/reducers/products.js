import * as types from '../constants/actionsType'

const initState = [];

const reducer = (state=initState,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            return action.products
        case types.DELETE_PRODUCT:
            return state.filter(product=>product.id!==action.id)
        case types.ADD_PRODUCT:
            return [...state,action.product]
        default:
            return state
    }
}

export default reducer