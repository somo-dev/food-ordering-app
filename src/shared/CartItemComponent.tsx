import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VegClassifierIcon from './VegClassifierIcon'
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';


const CartItemComponent = () => {
      return (
            <>
                  <Row>
                        <Col lg={4} xs={6} className='d-flex align-items-center'>
                              <Image
                                    draggable={false}
                                    style={{ width: '50px', height: '50px', cursor: 'pointer', borderRadius: '7px' }}
                                    src={`${imageStore}lu7b9y7xps4icwn6xzfj`}
                              />
                              <Typography className='ml-2'>Cafe Bahar since 1973</Typography>
                        </Col>
                        <Col lg={5} xs={6} className='d-flex align-items-center'>
                              <VegClassifierIcon itemAttribute={false} className='mb-2 mr-3' />
                              <Typography>Chicken Bitiyani</Typography>
                        </Col>
                        <Col lg={2} xs={6} className='my-2'>
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
                                          <Button disabled sx={{ color: 'black' }}><b>{2}</b></Button>
                                          <Button>+</Button>
                                    </ButtonGroup>
                              </Box></Col>
                        <Col lg={1} xs={6} className='my-auto d-flex justify-content-center'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
                  <Divider variant='middle' sx={{ borderWidth: 1, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                  <Row>
                        <Col lg={4} className='d-flex align-items-center'>
                              <Image
                                    draggable={false}
                                    style={{ width: '50px', height: '50px', cursor: 'pointer', borderRadius: '7px' }}
                                    src={`${imageStore}lu7b9y7xps4icwn6xzfj`}
                              />
                              <Typography className='ml-2'>Cafe Bahar since 1973</Typography>
                        </Col>
                        <Col lg={5} className='d-flex align-items-center'>
                              <VegClassifierIcon itemAttribute={false} className='mb-2 mr-3' />
                              <Typography>Chicken Bitiyani</Typography>
                        </Col>
                        <Col lg={2}>
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
                                          <Button disabled sx={{ color: 'black' }}><b>{2}</b></Button>
                                          <Button>+</Button>
                                    </ButtonGroup>
                              </Box></Col>
                        <Col lg={1} className='my-auto d-flex justify-content-center'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
                  <Divider variant='middle' sx={{ borderWidth: 1, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                  <Row>
                        <Col lg={12} className='d-flex align-items-center justify-content-center'>
                              <Typography className='ml-2'>Bill Details</Typography>
                        </Col>
                  </Row>
                  <Row>
                        <Col lg={8} className='d-flex align-items-center justify-content-center'>
                              <Typography className='ml-2'>Bill Details</Typography>
                        </Col>
                        <Col lg={4} className='my-auto d-flex'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
                  <Row>
                        <Col lg={8} className='d-flex align-items-center'>
                              <Typography className='ml-2'>Bill Details</Typography>
                        </Col>
                        <Col lg={4} className='my-auto d-flex'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
                  <Row>
                        <Col lg={8} className='d-flex align-items-center'>
                              <Typography className='ml-2'>Bill Details</Typography>
                        </Col>
                        <Col lg={4} className='my-auto d-flex'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
                  <Divider variant='middle' sx={{ borderWidth: 2, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                  <Row>
                        <Col lg={8} className='d-flex align-items-center'>
                              <Typography className='ml-2'>Bill Details</Typography>
                        </Col>
                        <Col lg={4} className='my-auto d-flex'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
            </>
      )
}

export default CartItemComponent