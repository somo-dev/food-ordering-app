import React from 'react';
import { Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';
import { Image } from 'semantic-ui-react';
import { Col, Form, InputGroup, Row } from 'react-bootstrap';
import Visa from '../assets/images/visa.png';
import RuPay from '../assets/images/Rupay-Logo.png';
import AmEx from '../assets/images/amex.png';
import Zeta from '../assets/images/Zeta_Services_logo.png';
import MasterCard from '../assets/images/MasterCard_Logo.png';
import { useForm } from 'react-hook-form';
import '../component_styles/paymentMethodFields.scss';
import ErrorIcon from '@mui/icons-material/Error';


const CardsPaymentTab = ({ totalAmount }: any) => {
    const { register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const submitHabdler = (data: any) => {
        console.warn(data);
    }
    return (
        <>
            <Row className='mb-2 d-flex align-items-center justify-content-center'>
                <Col>
                    <span className='text-secondary'><b>WE ACCEPT:</b></span>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '40px', cursor: 'pointer' }}
                        src={Visa}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '35px', cursor: 'pointer' }}
                        src={AmEx}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '35px', cursor: 'pointer' }}
                        src={MasterCard}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '35px', cursor: 'pointer' }}
                        src={Zeta}
                    />
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Image
                        className=''
                        draggable={false}
                        style={{ width: '65px', cursor: 'pointer' }}
                        src={RuPay}
                    />
                </Col>
            </Row>
            <Divider className='mb-4' sx={{ borderWidth: 1.5, borderStyle: 'solid', borderColor: '#283D52' }} />

            <Row className='mb-3'>
                <Col>
                    <span className='text-secondary'><b>Add new Card:</b></span>
                </Col>
            </Row>
            <Row className='mb-3 d-flex align-items-center'>
                <Col xs={12}>
                    <Form onSubmit={handleSubmit(submitHabdler)}>
                        <InputGroup size="lg" className='mb-2' style={{ maxWidth: '350px', height: '70px' }}>
                            <Form.Control
                                {...register("cardNumber", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 16
                                })}
                                className={`search-input-field ${errors.cardNumber ? "error" : ""}`}
                                placeholder="Card Number"
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        {errors.cardNumber?.type == 'required' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>This field is required!!</b></span>
                        </Col>}
                        {errors.cardNumber?.type == 'minLength' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>Card No. must be less then 8 digits!!</b></span>
                        </Col>}
                        {errors.cardNumber?.type == 'maxLength' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>Card No. must not be more then 16 digits!!</b></span>
                        </Col>}
                        <InputGroup size="lg" className='mb-2' style={{ maxWidth: '350px', height: '70px' }}>
                            <Form.Control
                                {...register("validThrough", {
                                    required: true,
                                    pattern: /^(0?[1-9]|1[0-2])[\/]\d{2}$/
                                })}
                                className={`search-input-field ${errors.validThrough ? "error" : ""}`}
                                placeholder="Validity (MM/YY)"
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <Form.Control
                                {...register("cvv", {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 3
                                })}
                                type='number'
                                className={`search-input-field ${errors.cvv ? "error" : ""}`}
                                placeholder="CVV"
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        {errors.validThrough?.type == 'required' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>Validity field is required!!</b></span>
                        </Col>}
                        {errors.validThrough?.type == 'pattern' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>Validity field should be in the format mm/yy!!</b></span>
                        </Col>}

                        {errors.cvv?.type == 'required' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>CVV field is required!!</b></span>
                        </Col>}
                        {errors.cvv?.type == 'minLength' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>CVV No. must be less then 3 digits!!</b></span>
                        </Col>}
                        {errors.cvv?.type == 'maxLength' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>CVV No. must not be more then 3 digits!!</b></span>
                        </Col>}
                        <InputGroup size="lg" className='mb-2' style={{ maxWidth: '350px', height: '70px' }}>
                            <Form.Control
                                {...register("name",{
                                    required: true
                                })}
                                className={`search-input-field ${errors.name ? "error" : ""}`}
                                placeholder="Name on Card"
                                aria-label="Large"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputGroup>
                        {errors.name?.type == 'required' && <Col xs={12} className='my-2'>
                            <ErrorIcon sx={{ color: "#7a0a00" }} />
                            <span className='text-danger ml-2'><b>Name field is required!!</b></span>
                        </Col>}
                        <Row className='d-flex align-items-center'>
                            <Col xs={12} className='d-flex'>
                                <Button type='submit' variant="outlined" size="large" color="success">
                                    {/* <IconButton aria-label="fingerprint" color="success"> */}
                                        <Fingerprint />
                                    {/* </IconButton> */}
                                    <b className='ml-2 my-2'>Pay ₹ {totalAmount + 2 + parseFloat((totalAmount / 11).toFixed(1))}</b>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </>
    )
}

export default CardsPaymentTab
