import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import CartItemComponent from './CartItemComponent'

const CartModalDialog = ({ show, handleClose }: any) => {
      return (
            <div>
                  <Modal
                  show={show}
                  size='lg'
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}>
                  <Modal.Header closeButton>
                        <Modal.Title><h5>Cart Items</h5></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <CartItemComponent />
                  </Modal.Body>
                  <Modal.Footer>
                        <Button variant="outline-warning" size="sm">
                              Proceed to payment
                        </Button>
                        <Button variant="outline-danger"  onClick={handleClose} size="sm">Close</Button>
                  </Modal.Footer>
            </Modal>
            </div>
      )
}

export default CartModalDialog