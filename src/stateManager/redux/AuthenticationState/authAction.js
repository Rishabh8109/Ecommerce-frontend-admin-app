import {
      SIGNUP_REQUEST ,
      SIGNUP_SUCCESS ,
      SIGNUP_ERROR,
      SIGNIN_REQUEST ,
      SIGNIN_SUCCESS ,
      SIGNIN_ERROR,
      SIGNOUT_REQUEST ,
      SIGNOUT_SUCCESS,
      SIGNOUT_ERROR

    } from './AuthTypes';

export const SignUpRequest = () => {
    return {
        type : SIGNUP_REQUEST
    }
}

export const SignUpSuccess = (data) => {
    return {
         type : SIGNUP_SUCCESS,
         payload : data
    }
}

export const  SignUpError = (error) => {
    return {
        type : SIGNUP_ERROR,
        payload : error
    }
}

// user singin
export const SignInRequest = () => {
    return {
        type : SIGNIN_REQUEST
    }
}

export const SignInSuccess = (data) => {
    return {
         type : SIGNIN_SUCCESS,
         payload : data
    }
}

export const  SignInError = (error) => {
    return {
        type : SIGNIN_ERROR,
        payload : error
    }
}

//user logout
export const SignoutRequest = () => {
    return {
        type : SIGNOUT_REQUEST
    }
}

export const SignoutSuccess = (data) => {
    return {
         type : SIGNOUT_SUCCESS,
         payload : data
    }
}

export const  SignoutError = (error) => {
    return {
        type : SIGNOUT_ERROR,
        payload : error
    }
}
