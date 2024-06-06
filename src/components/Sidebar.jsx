import React from 'react'
import styled from 'styled-components'
import { CloseRounded, HomeRounded } from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BackupIcon from '@mui/icons-material/Backup';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.5;
    height: 100vh;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_primary};
    user-select: none;


    @media (max-width:1100px){
        position:fixed;
        z-index:1000;
        width:100%;
        max-width:250px;
        left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
        transition: 0.3s ease all;
    }
`;
const Flex = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;    
`;

const Logo = styled.div`
    color: ${({ theme }) => theme.primary};
    margin: 16px 0px;
    font-weight:bold;
    font-size:20px;
    gap:6px;
    display:flex;
    justify-content:center;
`;

const Image = styled.img`
    height: 40px;
`

// By default not visible...only for small screens
const Close = styled.div`
    display:none;
    @media(max-width:1100px){
        display:block;
    }
`;

const Elements = styled.div`
    display:flex;
    gap:12px;
    padding:4px 16px;
    justify-content: flex-start;
    align-items:center;
    cursor:pointer;
    color: ${({ theme }) => theme.text_primary};

    &:hover{
        background-color: ${({ theme }) => theme.text_secondary};
    }
`;

const NavText = styled.div`
    padding:12px 0px;
`;




const Sidebar = ({ menuOpen, setMenuOpen, setDarkMode, darkMode }) => {

    const menuItems = [
        {
            link: "/",
            name: "Dashboard",
            icon: <HomeRounded />
        },
        {
            link: "/search",
            name: "Search",
            icon: <SearchOutlinedIcon />
        }, {
            link: "/favourites",
            name: "Favourites",
            icon: <FavoriteIcon />
        }
    ]

    const Buttons = [
        {
            func: () => console.log("upload"),
            name: "Upload",
            icon: <BackupIcon />
        }, {
            func: () => setDarkMode(!darkMode),
            name: darkMode ? "Light Mode" : "Dark Mode",
            icon: darkMode ? <LightModeIcon /> : <DarkModeIcon />
        }, {
            func: () => console.log("Log Out"),
            name: "Log Out",
            icon: <LogoutIcon />
        }
    ]

    return (
        <MenuContainer menuOpen={menuOpen}>
            <Flex>
                <Logo>
                    <Image src={logo} />
                    Podstream
                </Logo>
                <Close onClick={() => setMenuOpen(false)}>
                    <CloseRounded />
                </Close>
            </Flex>

            {menuItems.map((item) => (
                <Link to={item.link} style={{ textDecoration: 'none' }}>
                    <Elements>
                        {item.icon}
                        <NavText>{item.name}</NavText>
                    </Elements>
                </Link>
            ))}
            <hr style={{ width: '100%' }} />
            {Buttons.map((item) => (
                <Elements onClick={item.func}>
                    {item.icon}
                    <NavText>{item.name}</NavText>
                </Elements>
            ))}
        </MenuContainer >
    )
}

export default Sidebar