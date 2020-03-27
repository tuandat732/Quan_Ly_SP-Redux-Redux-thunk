import * as types from '../constants/actionsType'

const initState = {}

const reducer = (state=initState,action)=>{
    switch(action.type){
        case types.EDIT_PRODUCT:
            return action.product
        default:
            return state
    }
}

export default reducer