import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import OfferCard from './OfferCard';
import { responsive } from '../assets/data/constants';

const OffersCarousel = ({ offers }: any) => {
      return (
            <Container>
                  <Row className='d-flex justify-content-center my-2'>
                        <Col className='px-4'>
                              <Carousel
                                    ssr
                                    itemClass="image-item"
                                    responsive={responsive}
                                    arrows={false}
                                    infinite={true}
                                    centerMode={false}
                                    autoPlay={false}
                              >
                                    {offers?.map((offer: any, index: number) => {
                                          return (
                                                <div key={index} className="d-flex align-items-center justify-content-center mx-3 h-100">
                                                      <OfferCard offer={offer} />
                                                </div>
                                          );
                                    })}
                              </Carousel>
                        </Col>
                  </Row>
            </Container>
      )
}

export default OffersCarousel