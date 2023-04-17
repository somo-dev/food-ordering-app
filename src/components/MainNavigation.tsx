import React from 'react';
import { Container, Navbar, Nav, Offcanvas, NavDropdown, Button, Form } from 'react-bootstrap';
import { StyledBadge, navMenu } from '../assets/data/constants';
import logo from '../assets/images/hamburger.png'
import { IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DiscountIcon from '@mui/icons-material/Discount';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import '../component_styles/navBar.scss'
const MainNavigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <div className='d-flex justify-content-between mx-auto' style={{width: '1280px'}}>
                    <Navbar.Brand href="" >
                        <NavLink to={'/'} className='d-flex flex-row align-items-center'>
                            <img src={logo} style={{ 'width': '43px' }} />
                            <Typography
                                className='ml-2'
                                variant="h6"
                                noWrap
                                component="a"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'Black',
                                    textDecoration: 'none',
                                }}
                            >ZOOP</Typography>
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/search'>
                            <NavLink className={({ isActive }: any) => isActive ? "active d-flex align-items-center" : "d-flex align-items-center"} to={"/search"}>
                                <SearchIcon className='mr-2' />
                                Search
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/offers'>
                            <NavLink className={({ isActive }: any) => isActive ? "active d-flex align-items-center" : "d-flex align-items-center"} to={"/offers"}>
                                <DiscountIcon className='mr-2' />
                                Offers
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/help'>
                            <NavLink className={({ isActive }: any) => isActive ? "active d-flex align-items-center" : "d-flex align-items-center"} to={"/help"}>
                                <InfoIcon className='mr-2' />
                                Help
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href=''>
                            <NavLink className={({ isActive }: any) => isActive ? "active d-flex align-items-center" : "d-flex align-items-center"} to={"/auth?mode:signin"}>
                                <AccountCircleIcon className='mr-2' />
                                Sign In
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href=''>
                            <NavLink className={({ isActive }: any) => isActive ? "active d-flex align-items-center" : "d-flex align-items-center"} to={"/checkout"}>
                                <IconButton aria-label="cart" className='mr-2'>
                                    <StyledBadge badgeContent={11} max={9} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                                Cart
                            </NavLink>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div >
    )
}

export default MainNavigation;