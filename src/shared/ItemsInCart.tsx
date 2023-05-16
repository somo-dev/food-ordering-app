import React from 'react';
import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import { Col, Container, Row } from 'react-bootstrap'
import VegClassifierIcon from './VegClassifierIcon';
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';

const ItemsInCart = ({ items, cartQuantity, totalAmount }: any) => {
    return (
        <>
            <h5><b>Cart Items</b></h5>
            <Divider sx={{ borderWidth: 1, marginY: '20px', borderStyle: 'solid', borderColor: '#808080' }} />
            {items.length && items?.filter((item: any) => item.id !== "").map((item: any) => {
                return (
                    <div key={item?.id}>
                        {/* <Row className='mb-2'>
                                        <Col lg={12} className='d-flex'>
                                                <Image
                                                    className='mr-2'
                                                    draggable={false}
                                                    style={{ width: '50px', height: '50px', cursor: 'pointer', borderRadius: '7px' }}
                                                    src={`${imageStore}/${item.imageId}`}
                                                />
                                                <div>
                                                    <div className='ml-2'>{item.restName}</div>
                                                    <span className='ml-2'>{item.location}</span>
                                                </div>
                                        </Col>
                                    </Row> */}
                        <Row>
                            <Col lg={2} className='d-flex'>
                                <Image
                                    className='mr-2'
                                    draggable={false}
                                    style={{ width: '50px', height: '50px', cursor: 'pointer', borderRadius: '7px' }}
                                    src={`${imageStore}/${item.imageId}`}
                                />
                                {/* <div>
                                                    <div className='ml-2'>{item.restName}</div>
                                                    <span className='ml-2'>{item.location}</span>
                                                </div> */}
                            </Col>
                            <Col xs={5} className='d-flex align-items-center'>
                                <VegClassifierIcon itemAttribute={item.itemAttribute} className='mb-2 mr-3' />
                                <Typography>{item.title}</Typography>
                            </Col>
                            <Col xs={3} className='my-2'>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        '& > *': {
                                            m: 1,
                                        },
                                    }}
                                >
                                    <ButtonGroup color='success' variant="outlined" size='small' aria-label="outlined button group">
                                        <Button color="error">-</Button>
                                        <Button disabled sx={{ color: 'black' }}><b className='text-success'>{item.quantity}</b></Button>
                                        <Button>+</Button>
                                    </ButtonGroup>
                                </Box></Col>
                            <Col xs={2} className='my-auto d-flex justify-content-center'>
                                <span className='in-cart-price'>₹ {item.totalPrice}</span>
                            </Col>
                        </Row>
                        <Row className='mt-1'>
                            <span className='ml-2 d-flex'>By: {item.restName}</span>
                        </Row>
                        <Divider variant='middle' sx={{ borderWidth: 1, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                        <Row className='mb-2'>
                            <Col lg={12} className='d-flex align-items-center justify-content-start'>
                                <Typography className='ml-2'>Bill Details:</Typography>
                            </Col>
                        </Row>


                    </div>

                )
            })}
            {(items.length <= 1) &&
                <h6 className='ml-2 text-secondary'><b>Cart is Enpty</b></h6>
            }
            {(items.length > 1) && <>
                <Row>
                    <Col xs={9} className='d-flex align-items-center'>
                        <div className='ml-5'>Item Total:</div>
                    </Col>
                    <Col xs={3} className='my-auto d-flex'>
                        <span className='in-cart-price'>₹ {totalAmount}</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9} className='d-flex align-items-center'>
                        <div className='ml-5'>Platform Fee:</div>
                    </Col>
                    <Col xs={3} className='my-auto d-flex'>
                        <span className='in-cart-price'>₹ 2</span>
                    </Col>
                </Row>
                <Row>
                    <Col xs={9} className='d-flex align-items-center'>
                        <div className='ml-5'>GST and Restaurant Charges:</div>
                    </Col>
                    <Col xs={3} className='my-auto d-flex'>
                        <span className='in-cart-price'>₹ {(totalAmount / 11).toFixed(1)}</span>
                    </Col>
                </Row>
                <Divider variant='middle' sx={{ borderWidth: 2, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                <Row>
                    <Col xs={9} className='d-flex align-items-center'>
                        <b><h6 className='ml-5'>TO PAY:</h6></b>
                    </Col>
                    <Col xs={3} className='my-auto d-flex'>
                        <span className='in-cart-price'>₹ {totalAmount + 2 + parseFloat((totalAmount / 11).toFixed(1))}</span>
                    </Col>
                </Row>
            </>}
        </>
    )
}

export default ItemsInCart
