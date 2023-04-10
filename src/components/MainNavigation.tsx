import React from 'react';
import { Container, Navbar, Nav, Offcanvas, NavDropdown, Button, Form } from 'react-bootstrap';
import { StyledBadge, navMenu } from '../assets/constants';
import logo from '../assets/images/hamburger.png'
import { IconButton, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DiscountIcon from '@mui/icons-material/Discount';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const MainNavigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/" className='d-flex flex-row align-items-center'>
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
                    </Navbar.Brand>
                    <i className="fas fa-badge-percent" />
                    <Nav className="me-auto">
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/search'>
                            <SearchIcon className='mr-2' />
                            Search
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/offers'>
                            <DiscountIcon className='mr-2' />
                            Offers
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/help'>
                            <InfoIcon className='mr-2' />
                            Help
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/auth?mode:signin'>
                            <AccountCircleIcon className='mr-2' />
                            Sign In
                        </Nav.Link>
                        <Nav.Link className='ml-4 d-flex align-items-center' href='/offers'>
                            <IconButton aria-label="cart" className='mr-2'>
                                <StyledBadge badgeContent={11} max={9} color="primary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div >
    )
}

export default MainNavigation;