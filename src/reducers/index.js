import {combineReducers} from 'redux'
import products from './products'
import itemEditing from './itemEditing'

const rootReducer = combineReducers({
    products,
    itemEditing,
})

export default rootReducer