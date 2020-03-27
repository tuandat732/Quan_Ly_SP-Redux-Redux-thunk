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

export const actAddProductRequest = (product)=>(dispatch)=>{ //add product server
    return callApi("products","POST",product).then(res=>{
        dispatch(actAddProduct(res.data))
    })
}

export const actAddProduct = (product)=>{ //add product trên store
    return{
        type:types.ADD_PRODUCT,
        product
    }
}

export const actGetProductRequest = (id)=>(dispatch)=>{
    return callApi(`products/${id}`,"GET",null).then(res=>{
        dispatch(actGetProduct(res.data))
    })
}

export const actGetProduct = (product)=>{
    return{
        type:types.EDIT_PRODUCT,
        product
    }
}

export const actUpdateProductRequest = (product)=>(dispatch)=>{ //update trên server
    return callApi(`products/${product.id}`,"PUT",product).then(res=>{
        dispatch(actUpdateProduct(res.data))
    })
}

export const actUpdateProduct = (product)=>{ //update trên store redux
    return{
        type:types.UPDATE_PRODUCT,
        product
    }
}
