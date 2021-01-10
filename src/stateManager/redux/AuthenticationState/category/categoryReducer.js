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

const categoryState = {
  loading : false, 
  message : '',
  error : '',
  isSuccessed:false,
  alert : false,
  data : [],
  isDeleted : ''
}

const create_category_state = {
    loading : false, 
    message : '',
    error : '',
    alert : false,
    isCreated : ''
}

const category_delete_state = {
    loading : false, 
    message : '',
    error : '',
    alert : false,
    isDeleted : ''
}

export const categoryReducer = (state = categoryState , action ) => {
    switch(action.type) {
        case GET_CATEGORY_REQUEST : return {
            loading : true,
            message : '',
            error : '',
        }
        case GET_CATEGORY_SUCCESS : return {
            loading : false,
            message : '',
            data :  action.payload
        }
        case GET_CATEGORY_FAILED : return {
            loading : false,
            error : action.payload,
           
        }
        default : return state
    }
}
export const create_category_Reducer = (state = create_category_state , action ) => {
    switch(action.type) {
        case CREATE_CATEGORY_REQUEST : return {
            loading : true,
          
        }
        case CREATE_CATEGORY_SUCCESS : return {
            loading : false,
            message : action.payload,
            isCreated : true,
            alert : true
        }
        case CREATE_CATEGORY_FAILED : return {
            loading : false,
            error : action.payload,
            isCreated : false,
            alert : true
        }
        default : return state
    }
}

export const category_delete_Reducer = (state = category_delete_state , action ) => {
    switch(action.type) {
        case DELETE_CATEGORY_REQUEST : return {
            ...state,
            loading : true,
        }
        case DELETE_CATEGORY_SUCCESS : return {
            ...state,
            loading : false,
            message : action.payload,
            isDeleted : true,
            alert : true
        }
        case DELETE_CATEGORY_FAILED : return {
            ...state,
            loading : false,
            error : action.payload,
            isDeleted : false,
            alert : true
        }
        default : return state;
    }
}

