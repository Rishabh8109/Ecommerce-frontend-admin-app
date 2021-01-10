import styled from 'styled-components';


export const Heading = styled.h4`
    font-family: 'Roboto' ,'sans-serif';
    color:black;
    opacity:.7;
   
`

export const SubTitle = styled.p`
   font-family: 'Poppins' ,'sans-serif';
   color:midnightblue;
   font-size:14px;
  
`

export const Title = styled.h3`
    font-family: 'Poppins' ,'sans-serif';
  
    font-size:22px;
`

export const Sub_Title = styled.h5`
    font-family: 'Roboto' ,'sans-serif';
    color:black;
    font-size:22px;
    opacity:.8;
`;

export const Para = styled.p`
     font-family: 'Roboto' ,'sans-serif';
     font-size:16px;
     color:black; 
     width:90%;
     opacity:.7;
`

export const Category = styled.span`
   font-size:14px;
     color:darkgreen; 
`

export const Modal = styled.div`
   width:70%;
   position:fixed;
   top:10%;
   left:20%;
   /* background:#0E3E48; */
   background:white;
   border-radius:10px;
   opacity:${({isOpen}) => isOpen ? 1 :0};
   transition : opacity .2s linear;
   z-index:10;
   height:650px;
   display:block;
  
`

export const ModalHeader = styled.div`
   width:100%;
   padding:.5rem 1rem;
   height:50px;
   border-bottom:.5px solid lavender;
`

export const ModalBody = styled.div`
  width:100%;
  padding:.5rem;
  height:auto;

`

export const Image = styled.img`
   transform : scale(.6);
`;

export const Images = styled.img`
     max-width:100%;
     display:block;
     height:auto;
    transform : scale(.3) translateY(-350px);
`