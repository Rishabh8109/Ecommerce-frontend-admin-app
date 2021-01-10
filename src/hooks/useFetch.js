import React , {useState } from 'react';
import axios from 'axios';

const useFetch = (url , initialState) => {
   const [data , setData] = useState(initialState);
   const [error , setError] = useState('');
   
   axios({
     method : method,
     url : url,
   }).json(res =>{
      setData(res.data);
   }).catch(err => {
      setError(err);
   })
    
   return [ data , error];
}

export default useFetch;
