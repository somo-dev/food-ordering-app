import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VegClassifierIcon from './VegClassifierIcon'
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import { useSelector } from 'react-redux';

interface ICartItemsProps {
      items: {
            id: string,
            imageId: string,
            price: number,
            quantity: number,
            totalPrice: number,
            title: string,
            restName: string,
            location: string,
            itemAttribute: string
      }[],
      totalQuantity: number,
      totalAmount: number

}

const CartItemComponent = () => {
      const items = useSelector((state: any) => state.cart.items);
      const cartQuantity = useSelector((state: any) => state.cart.totalQuantity);
      const totalAmount = useSelector((state: any) => state.cart.totalAmount);

      return (
            <>
                  {(items.length <= 1) &&
                        <h6 className='ml-2 text-secondary'><b>Cart is Enpty</b></h6>}
                  {(items.length > 1) && items?.filter((item: any) => item.id !== "").map((item: any) => {
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
                                    </div>
                              )
                        })}

            </>
      )
}

export default CartItemComponent