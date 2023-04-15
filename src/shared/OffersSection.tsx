import React from 'react';
import { Col } from 'react-bootstrap';
import AlarmIcon from '@mui/icons-material/Alarm';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import OffersCarousel from './OffersCarousel';

const OffersSection = ({ offerCategory }: any) => {
      return (
            <>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2} className='d-flex align-items-center' style={{ color: '#756552' }}>
                        <AlarmIcon fontSize='small' className='mr-2' />
                        <span>{offerCategory?.slaString}</span>
                  </Col>
                  <Col xs={2} sm={2} md={2} lg={2} xl={2} className='d-flex align-items-center' style={{ color: '#756552' }}>
                        <AccountBalanceWalletIcon fontSize='small' className='mr-2' />
                        <span>{offerCategory?.costForTwoMessage}</span>
                  </Col>
                  <Col xs={12} className='d-flex align-items-center py-3'>
                        <OffersCarousel offers={offerCategory?.offers} />
                  </Col>
            </>
      )
}

export default OffersSection