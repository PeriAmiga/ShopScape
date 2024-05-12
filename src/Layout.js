import React from 'react';
import { Outlet } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import logo from "./pictures/logo.png";
import "./Layout.css";
import Cart from "./Cart";


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '50px',
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
        height: '40px',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1, 2, 1),
    position: 'absolute',
    top: '-60%',
    right: theme.spacing(1),
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '80%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
        },
    },
}));


const Layout = ({cartItems, setCartItems}) => {


    return (
        <>
            <div className="layout">
                <div className="logo">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand>
                                <Nav.Item>
                                    <Nav.Link href='/'><img src={logo} width="450px" alt="Logo" style={{ cursor: 'pointer' }}/></Nav.Link>
                                </Nav.Item>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </div>
                <div className="search-container">
                    <Search className="search">
                        <div className="searchIcon">
                            <SearchIconWrapper className="search-icon-wrapper">
                                <SearchIcon />
                            </SearchIconWrapper>
                        </div>
                        <StyledInputBase className="styled-input-base" inputProps={{ 'aria-label': 'search' }}/>
                    </Search>
                </div>
                <div className="navigation-container">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse>
                                <Nav className="me-auto" fill variant="underline">
                                    <Nav.Item>
                                        <LinkContainer to="/tools">
                                            <Nav.Link eventKey="tab-Tools">Tools</Nav.Link>
                                        </LinkContainer>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <LinkContainer to="/computers">
                                            <Nav.Link eventKey="tab-Computers">Computers</Nav.Link>
                                        </LinkContainer>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <LinkContainer to="/phones">
                                            <Nav.Link eventKey="tab-Phones">Phones</Nav.Link>
                                        </LinkContainer>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <LinkContainer to="/smartwatches">
                                            <Nav.Link eventKey="tab-SmartWatches">Smart Watches</Nav.Link>
                                        </LinkContainer>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <LinkContainer to="/televisions">
                                            <Nav.Link eventKey="tab-Televisions">Televisions</Nav.Link>
                                        </LinkContainer>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Cart cartIconCreate={true} placement={'end'} cartItems={cartItems} setCartItems={setCartItems}/>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Layout;