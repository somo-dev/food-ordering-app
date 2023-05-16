import React from 'react';
import { Image } from 'semantic-ui-react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import UPI from '../assets/images/UPI_logo.png';
import PhonePe from '../assets/images/PhonePe-Logo.png';
import GooglePay from '../assets/images/Google-Pay-logo.png';
import GPaySmall from '../assets/images/gPay-small.png';
import Paytm from '../assets/images/Paytm_logo.png';
import BHIM from '../assets/images/bhim.png';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';

const UPIPaymentsTab = ({ totalAmount }: any) => {
    return (
        <>
            <Row className='mb-2'>
                <Image
                    className='mr-2'
                    draggable={false}
                    style={{ width: '80px', cursor: 'pointer' }}
                    src={UPI}
                />
            </Row>
            <Row className='mb-2 d-flex align-items-center justify-content-center'>
                <Col>
                    <span className='text-secondary'><b>WE ACCEPT:</b></span>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '90px', cursor: 'pointer' }}
                        src={GooglePay}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '85px', cursor: 'pointer' }}
                        src={PhonePe}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '45px', cursor: 'pointer' }}
                        src={Paytm}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '65px', cursor: 'pointer' }}
                        src={BHIM}
                    />
                </Col>
            </Row>
            <Divider className='mb-4' sx={{ borderWidth: 1.5, borderStyle: 'solid', borderColor: '#283D52' }} />
            <Row className='mb-3'>
                <Col>
                    <span className='text-secondary'><b>Pay via saved VPA</b></span>
                </Col>
            </Row>

            <Row style={{ border: '1px solid #c7c7c7', borderRadius: '5px', maxWidth: '350px' }} className='mb-3 mx-1 p-4 d-flex align-items-center'>
                <Col xs={2} className='d-flex'>
                    <Image
                        draggable={false}
                        style={{ width: '25px', cursor: 'pointer' }}
                        src={GPaySmall}
                    />
                </Col>
                <Col xs={6} className='d-flex'>
                    <p style={{ margin: '0px' }} className='text-secondary'><b>johndoe@okicici</b></p>
                </Col>
                <Col sm={4} className='d-flex justify-content-center'>
                    <Button variant="outlined" size="small" color="success">
                        <b>PAY ₹ {totalAmount + 2 + parseFloat((totalAmount / 11).toFixed(1))}</b>
                    </Button>
                </Col>
            </Row>

            <Row className='mb-3'>
                <Col>
                    <span className='text-secondary'><b>Pay via saved VPA</b></span>
                </Col>
            </Row>
            <Row className='mb-3 d-flex align-items-center'>
                <Col xs={12}>
                    <InputGroup size="lg" className='mb-2' style={{ maxWidth: '350px', height: '70px' }}>
                        <Form.Control
                            className='search-input-field'
                            placeholder="Enter VPA"
                            aria-label="Large"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='d-flex'>
                    <Button variant="outlined" size="large" color="success">
                            <Fingerprint />
                        <b className='ml-2 my-2'>Verify and Pay ₹ {totalAmount + 2 + parseFloat((totalAmount / 11).toFixed(1))}</b>
                    </Button>
                </Col>
            </Row>

        </>
    )
}

export default UPIPaymentsTab
