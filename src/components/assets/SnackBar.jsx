import React , {useEffect} from 'react'
import styled , {keyframes} from 'styled-components';
import {SubTitle} from '../../pages/StyledComponent/GlobalStyle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';



const Snackbar = styled.div`
   width:350px;
   height:60px;
   background: ${props => props.variant === 'success' ? 'LimeGreen' : '#f72751'};
   border-radius:5px;
   text-align:center;
   color:white;
   font-family:'Roboto' ,sans-serif;
   display:flex;
   justify-content:space-between;
   padding:1rem .5rem;
   opacity:${({open}) => open ? .8 : 0};
   transition :  opacity .1s ease-in;
   &:first-child , &:last-child {
       cursor :pointer;
   }
   position:fixed;
   z-index:99;
   left:45%;
   top:10%;
`;

const Para = styled.p`
   width:250px;
`

function SnackBar({...props}) {
   useEffect(() => {
      let timer;
       timer = setTimeout(() => {
            props.setOpen(false);
         },5000);
      
       return () =>  clearTimeout(timer);
 
     },[])
   

  return (
    <Snackbar variant={props.variant} open={props.open} className="shadow-md">
       <CheckCircleOutlineIcon />
       <Para className="text-white">{props.message}</Para>
       <CloseIcon onClick={props.handleclose}/>
    </Snackbar>
  )
}

export default SnackBar;
