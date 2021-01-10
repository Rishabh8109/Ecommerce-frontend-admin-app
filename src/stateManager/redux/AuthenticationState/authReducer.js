
import {
    SIGNUP_REQUEST ,
    SIGNUP_SUCCESS ,
    SIGNUP_ERROR,
    SIGNIN_REQUEST ,
    SIGNIN_SUCCESS ,
    SIGNIN_ERROR ,
    SIGNOUT_REQUEST ,
    SIGNOUT_SUCCESS,
    SIGNOUT_ERROR

  } from './AuthTypes';

const initialState = {
  user : [],
  isRegistered : false,
  error : '',
  loading : false,
  isError : false
}

const loginState = {
   user : [],
   error : '',
   token : '',
   message : '',
   loading : false,
   isError : false,
   isLoggedIn : false
}
const logoutState = {
   error : '',
   message : '',
   loading : false,
   isError : false,
   isLoggedIn : true,
}

 export const SignUpReducer = (state = initialState , action) => {
     console.log(action);
    switch(action.type) {
        case SIGNUP_REQUEST : return {
            loading : true,
            error : '',
            isRegistered : false,
        } 
        case SIGNUP_SUCCESS : return {
            loading :false,
            isRegistered : true,
            error : '',
            user : action.payload,
            message : action.payload.message,
            isError : false,
        }
        case SIGNUP_ERROR : return {
            loading:false,
            isRegistered : false,
            error : action.payload,
            user : [],
            isError : true,
        }
        default : return state;
    }
}

export const SignOutReducer = (state = logoutState , action) => {
    switch(action.type) {
        case SIGNOUT_REQUEST : return {
            loading : true,
            error : '',
        } 
        case SIGNOUT_SUCCESS :
        localStorage.removeItem('token');    
        return {
            loading :false,
            message : action.payload.message,
            isLoggedIn : false
        }
        case SIGNOUT_ERROR : return {
            loading:false,
            error : action.payload,
            isError : true,
            error : action.payload,
            isLoggedIn : true
        }
        default : return state;
    }
}

export const SignInReducer = (state = loginState , action) => {
    switch(action.type) {
        case SIGNIN_REQUEST : return {
            loading : true,
            error : '',
        } 
        case SIGNIN_SUCCESS :
        localStorage.setItem('token' , action.payload.token);    
        return {
            loading :false,
            error : '',
            user : action.payload,
            message : action.payload.message,
            token : action.payload.token,
            isError : false,
            isLoggedIn : true
        }
        case SIGNIN_ERROR : return {
            loading:false,
            error : action.payload,
            user : [],
            isError : true,
            isLoggedIn : false
        }
        default : return state;
    }
}


