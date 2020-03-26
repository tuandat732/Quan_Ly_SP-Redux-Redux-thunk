import * as types from '../constants/actionsType'
import callApi from '../utils/apiCaller'

//async action:
/**
 * là action chưa sẵn sàng ngay khi dc gọi
 * sử dụng redux-thunk để trì hoãn việc dispatch => fetch dữ liệu xong ms dispatch
 */

//middleware trong redux
/**
 * là lớp nằm giữa reducer và dispatch actions
 * Vj trí hoạt động:
 *  + trước khi reducer nhận dc action
 *  + sau khi action đã được dispatch
 * - Thường dùng để sử lý async action 
 */

export const actFetchProductsRequest = ()=>{
    return (dispatch)=>{
        return callApi("products","GET",null).then(res=>{
            dispatch(actFetchProducts(res.data))
        })
    }
}

export const actFetchProducts = (products)=>{
    return {
        type:types.FETCH_PRODUCTS,
        products:products
    }
}

export const actDeleteProductRequest = (id)=>(dispatch)=>{
    return callApi(`products/${id}`,"DELETE",null).then(res=>{
        dispatch(actDeleteProduct(id))
    })
}

export const actDeleteProduct = (id) => {
    return {
        type:types.DELETE_PRODUCT,
        id
    }
}
