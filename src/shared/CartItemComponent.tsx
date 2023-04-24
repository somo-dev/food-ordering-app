import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VegClassifierIcon from './VegClassifierIcon'

const CartItemComponent = () => {
      return (
            <>
                  <Row>
                        <Col lg={8} className='d-flex align-items-center'>
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
                        <Col lg={2} className='my-auto d-flex justify-content-center'>
                              <span className='in-cart-price'>₹ 527</span>
                        </Col>
                  </Row>
                  <Divider variant='middle' sx={{ borderWidth: 1, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                  
            </>
      )
}

export default CartItemComponent