import {
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILED,
} from "./categoryType";

export const createCategoryRequest = () => {
    return {
        type : CREATE_CATEGORY_REQUEST
    }
}
export const createCategorySuccess = (data) => {
    return {
        type : CREATE_CATEGORY_SUCCESS,
        payload : data
    }
}
export const createCategoryFailed = (error) => {
    return {
        type : CREATE_CATEGORY_FAILED,
        payload : error
    }
}

export const getCategoryRequest = () => {
    return {
        type : GET_CATEGORY_REQUEST
    }
}

export const getCategorySuccess = (data) => {
    const productData = data.products.map(product => {
        return product;
    });
    
    return {
        type : GET_CATEGORY_SUCCESS,
        payload : productData
    }
}
export const getCategoryFailed = (error) => {
    return {
        type : GET_CATEGORY_FAILED,
        payload : error
    }
}


export const DeleteCategoryRequest = () => {
    return {
        type : DELETE_CATEGORY_REQUEST
    }
}

export const DeleteCategorySuccess = (data) => {
    return {
        type : DELETE_CATEGORY_SUCCESS,
        payload : data
    }
}

export const DeleteCategoryFailed = (error) => {
    return {
        type : DELETE_CATEGORY_FAILED,
        payload : error
    }
}