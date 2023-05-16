import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import CartItemComponent from './CartItemComponent'
import { useSelector } from 'react-redux';
import { Divider, Typography } from '@mui/material';
// import '../component_styles/modalScrollable.scss'

const CartModalDialog = ({ show, handleClose }: any) => {
      const totalAmount = useSelector((state: any) => state.cart.totalAmount);
      const items = useSelector((state: any) => state.cart.items);
      return (
            <div>
                  <Modal
                        show={show}
                        size='lg'
                        scrollable={true}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}>
                        <Modal.Header closeButton>
                              <Modal.Title><h5>Cart Items</h5></Modal.Title>
                        </Modal.Header>

                        <Modal.Body className='' style={{ overflowX: 'hidden' }}>
                              <CartItemComponent />
                        </Modal.Body>
                        <Modal.Footer>
                              {(items.length > 1) && <Container>
                                    <Row className='mb-2'>
                                          <Col lg={12} className='d-flex align-items-center justify-content-start'>
                                                <Typography className='ml-2'>Bill Details:</Typography>
                                          </Col>
                                    </Row>

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
                                    <Divider variant='middle' sx={{ borderWidth: 2, margin: '12px', borderStyle: 'dashed', borderColor: '#808080' }} />
                              </Container>}

                              {(items.length > 1) && <Button variant="outline-warning" size="sm">
                                    Proceed to payment
                              </Button>}
                              {(items.length <= 1) && <Button variant="outlined" disabled>
                                    Proceed to payment
                              </Button>}
                              <Button variant="outline-danger" onClick={handleClose} size="sm">Close</Button>
                        </Modal.Footer>
                  </Modal>
            </div>
      )
}

export default CartModalDialog