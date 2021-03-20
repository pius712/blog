import * as React from 'react';
import styled from 'styled-components';
const HomeLayout = ({children}) =>{

    return (
        <LayoutBlock>
            {children}
        </LayoutBlock>
    )
}

export default HomeLayout;

const LayoutBlock = styled.div`

  width: calc(100% - 2rem);
  padding: 0 2rem;
  max-width: 780px;
`