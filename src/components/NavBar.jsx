import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { PersonRounded } from "@mui/icons-material";
import { IconButton } from '@mui/material';

const NavBarDiv = styled.div`
    display:flex;
    justify-content: space-between;
    padding:16px 30px;
    align-items:center;
    color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.bg};
    box-shadow: 0 4px 30px rgba(0,0,0,0,1);
    backdrop-filter:blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);    
`;

const ButtonDiv = styled.div`
    display:flex;
    font-size:14px;
    cursor:pointer;
    text-decoration: none;
    max-width:70px;
    align-items: center;
    color:${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius:2px;
    padding:5px 30px;
    gap:5px;
`;

const IcoButton = styled(IconButton)`
    color: ${({ theme }) => theme.text_secondary} !important;
`;
const NavBar = ({ setMenuOpen, menuOpen }) => {
    return (
        <NavBarDiv>
            <IcoButton onClick={() => setMenuOpen(!menuOpen)}>
                <MenuIcon />

            </IcoButton>
            <ButtonDiv>
                <PersonRounded />
                Login
            </ButtonDiv>
        </NavBarDiv>
    )
}

export default NavBar