import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../component_styles/allRestaurants.scss';
import MusicPlayerCard from '../shared/MusicPlayerCard';

const SponsoredMusicPlayer = () => {
    return (
        <>
            <Container className='mb-5 py-3'>
                <Row className='mx-auto d-flex justify-content-center'>
                    <Col className='px-auto pb-3' md= {6}>
                        <div className='d-flex justify-content-left ml-1 mb-2 broughtToYou-text'>
                            Brought to you by
                        </div>
                        <div className='d-flex justify-content-left ml-1 mb-2 broughtToYou-CompanyName'>
                            TUPLE
                        </div>
                        <div className='d-flex ml-1 mb-2 broughtToYou-subText'>
                            Listen to your favourite and mind blowing songs on TUPLE music streaming app while you wait for our super-fast food delivery.
                        </div>
                        <div className='d-flex ml-1 mb-2 broughtToYou-subText'>
                            High quality music and podcast streaming al the lowest price.
                        </div>
                        <div className='d-flex ml-1 mb-2 broughtToYou-subText'>
                            This week's fuatured song: &nbsp; <b>Live From Space by Mac Miller</b>
                        </div>
                    </Col>
                    <Col className='d-flex justify-content-end pb-3' md= {6}>
                        <MusicPlayerCard />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SponsoredMusicPlayer