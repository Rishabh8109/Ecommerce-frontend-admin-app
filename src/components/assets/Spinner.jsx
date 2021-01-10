import React from 'react'
import styled from 'styled-components';

const Title = styled.h4`
  font-family: 'Poppins' ,sans-serif;
  font-weight:600;
  position:absolute;
  left: 38%;
  top:33%;
  color:white;
  z-index:30;
  letter-spacing:2px;
  text-align:center;
`;

function Spinner() {
    return (
       <>

          <div className="loader">
           <div className="dot1"></div>  
           <div className="dot2"></div>  
           <div className="dot3"></div>  
           <div className="dot4"></div>  
        </div>
       </>

    )
}

export default Spinner;
