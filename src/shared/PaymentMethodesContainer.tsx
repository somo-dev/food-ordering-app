import React from 'react';
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import UPIPaymentsTab from './UPIPaymentsTab';
import CardsPaymentTab from './CardsPaymentTab';
import '../component_styles/paymentMethodContainerStyles.scss';
import Wallet from '../assets/images/wallet.png';
import Card from '../assets/images/credit-card.png';
import { Image } from 'semantic-ui-react';


const PaymentMethodesContainer = ({totalAmount}: any) => {
    return (
        <>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className='mx-3'>
                    <Col xs={3} className='pl-2 pt-3 pb-3' style={{ backgroundColor: '#EDF1F7', padding: '0px' }}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <Image
                                        className='mr-2'
                                        draggable={false}
                                        style={{ width: '21px', cursor: 'pointer', borderRadius: '7px' }}
                                        src={Wallet}
                                    />
                                    UPI
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <Image
                                        className='mr-2'
                                        draggable={false}
                                        style={{ width: '25px', cursor: 'pointer', borderRadius: '7px' }}
                                        src={Card}
                                    />
                                    Cards
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={9}>
                        <Tab.Content className='mx-2'>
                            <Tab.Pane eventKey="first">
                                <UPIPaymentsTab totalAmount={totalAmount} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <CardsPaymentTab totalAmount={totalAmount} />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    )
}

export default PaymentMethodesContainer
