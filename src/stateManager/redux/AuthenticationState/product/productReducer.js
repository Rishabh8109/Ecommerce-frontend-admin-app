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
 
const productState = {
  loading : false, 
  message : '',
  error : '',
  isError : false,
  alert: false,
  data : [],
}

const createProductState = {
  loading : false, 
  message : '',
  error : '',
  isError : false,
  alert: false,
  isCreated : ''
}

const deleteProductState = {
  loading : false, 
  message : '',
  error : '',
  isError : false,
  alert: false,
  isDeleted : ''
}



export const productReducer = (state = productState , action ) => {
    switch(action.type) {
       
      case   GET_PRODUCT_REQUEST : return {
            ...state,
            loading : true,
        }
        case  GET_PRODUCT_SUCCESS : return {
            ...state,
            loading : false,
            message : '',
            data :  action.payload
        }
        case  GET_PRODUCT_FAILED : return {
            ...state,
            loading : false,
            error : action.payload,
        }
        default : return state
    }
}


export const create_productReducer = (state = createProductState , action ) => {
    switch(action.type) {
        case  CREATE_PRODUCT_REQUEST : return {
            loading : true,
        }
        
        case  CREATE_PRODUCT_SUCCESS : return {
            loading : false,
            message : action.payload,
            isError : false,
            alert : true,
            isCreated: true
        }
        case  CREATE_PRODUCT_FAILED : return {
            loading : false,
            error : action.payload, 
            alert : true,
            isCreated: false
        }
        default : return state
    }
}

export const delete_productReducer = (state = deleteProductState , action ) => {
    switch(action.type) {
       
        case DELETE_PRODUCT_REQUEST : return {
            ...state,
            loading : true,
        }
        case DELETE_PRODUCT_SUCCESS : return {
            ...state,
            loading : false,
            message : action.payload,
            isError : false,
            alert : true,
            isDeleted : true
        }
        case DELETE_PRODUCT_FAILED : return {
            ...state,
            loading : false,
            error : action.payload.error,
            isError : true,
            alert : true,
            isDeleted : false
        }
        default : return state
    }
}
