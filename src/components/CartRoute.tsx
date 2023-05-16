import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import VegClassifierIcon from '../shared/VegClassifierIcon'
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import { useSelector } from 'react-redux';
import ItemsInCart from '../shared/ItemsInCart';
import PaymentMethodesContainer from '../shared/PaymentMethodesContainer';

const CartRoute = () => {
    const items = useSelector((state: any) => state.cart.items);
    const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
    const totalAmount = useSelector((state: any) => state.cart.totalAmount);

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <Col lg={5} className='mt-5 mb-5'>
                                <Box
                                    className='p-5'
                                    sx={{
                                        borderRadius: '10px',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        // borderColor: 'black',
                                        '&:hover': {
                                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                                        },
                                    }}
                                >
                                    <ItemsInCart
                                        items={items}
                                        cartQuantity={cartQuantity}
                                        totalAmount={totalAmount} />
                                </Box>
                            </Col>
                            <Col lg={7} className='mt-5 mb-5'>
                                <Box
                                    className='pt-5 pb-5'
                                    sx={{
                                        borderRadius: '10px',
                                        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                        // borderColor: 'black',
                                        '&:hover': {
                                            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
                                        },
                                    }}
                                >
                                    <PaymentMethodesContainer totalAmount={totalAmount} />
                                </Box>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CartRoute
