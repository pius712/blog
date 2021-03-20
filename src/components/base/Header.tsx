import * as React from 'react';
import styled from "styled-components";
import Profile from "components/profile";


const Header:React.FC = () =>{


    return (
        <HeaderBlock>
            <Profile>ds
        </HeaderBlock>
    )

}

export default Header;

const HeaderBlock = styled.header`
    height : 60px;
`