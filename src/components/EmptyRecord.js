import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../pages/StyledComponent/GlobalStyle';

const Empty = styled.div`
   border:1px dashed blueviolet;
   width:400px;
   height:100px;
   text-align:center;
   margin:auto;
   display:block;
   opacity:.7;
   padding-top:1.9rem;
   border-radius:4px;
`

function EmptyCategory(props) {
  const {message} = props;
    return (
        <Empty>
          <SubTitle>{message}</SubTitle>
        </Empty>
    )
}

export default EmptyCategory;
