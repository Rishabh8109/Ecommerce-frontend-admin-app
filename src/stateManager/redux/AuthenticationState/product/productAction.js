import {
   CREATE_PRODUCT_REQUEST,
   CREATE_PRODUCT_SUCCESS,
   CREATE_PRODUCT_FAILED,
   GET_PRODUCT_REQUEST,
   GET_PRODUCT_SUCCESS,
   GET_PRODUCT_FAILED,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILED,
} from "./ActionTypes";

// PRODUCT CREATE ACTIONS
export const createproductRequest = () => {
    return {
        type : CREATE_PRODUCT_REQUEST
    }
}
export const createproductSuccess = (data) => {
    return {
        type : CREATE_PRODUCT_SUCCESS,
        payload : data
    }
}
export const createproductFailed = (error) => {
    return {
        type : CREATE_PRODUCT_FAILED,
        payload : error
    }
}


// PRODUCT DELETE ACTIONS
export const deleteproductRequest = () => {
    return {
        type : DELETE_PRODUCT_REQUEST
    }
}
export const deleteproductSuccess = (data) => {
    return {
        type : DELETE_PRODUCT_SUCCESS,
        payload : data
    }
}
export const deleteproductFailed = (error) => {
    return {
        type : DELETE_PRODUCT_FAILED,
        payload : error
    }
}


// GET PRODUCT ACTIONS
export const getproductRequest = () => {
    return {
        type : GET_PRODUCT_REQUEST
    }
}
export const getproductSuccess = (data) => {
   
    
    return {
        type : GET_PRODUCT_SUCCESS,
        payload : data
    }
}
export const getproductFailed = (error) => {
    return {
        type : GET_PRODUCT_FAILED,
        payload : error
    }
}

