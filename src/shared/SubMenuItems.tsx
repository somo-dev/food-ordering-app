import { Divider, Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import veg from '../assets/images/veg.png';
import nonVeg from '../assets/images/nonVeg.png';

const SubMenuItems = ({ subMenuItems }: any) => {
      console.log(subMenuItems);
      return (
            <>
                  <Container>
                        <Divider />
                        <Row className='my-5'>
                              <Col xs={8} className='d-flex pl-4'>
                                    <div>
                                          <Image
                                                className='mb-2'
                                                draggable={false}
                                                style={{ width: '20px', height: '20px' }}
                                                src={subMenuItems?.card?.info?.itemAttribute?.vegClassifier === 'VEG' ? veg : nonVeg}
                                          />
                                          <Typography className='mb-2'><b>{subMenuItems?.card?.info?.name}</b></Typography>
                                          <Typography className='mb-2'><b>₹ {subMenuItems?.card?.info?.price}</b></Typography>
                                          <Typography className='mb-2'>{subMenuItems?.card?.info?.description}</Typography>
                                    </div>
                              </Col>
                              <Col xs={4} className='d-flex justify-content-end align-items-center pr-5'>
                                    {subMenuItems?.card?.info?.imageId &&
                                          <Image
                                                draggable={false}
                                                style={{ maxWidth: '130px', cursor: 'pointer', borderRadius: '7px' }}
                                                src={`${imageStore}${subMenuItems?.card?.info?.imageId}`}
                                          />}
                                    {!subMenuItems?.card?.info?.imageId && subMenuItems?.card &&
                                          <Image
                                                draggable={false}
                                                style={{ maxWidth: '130px', cursor: 'pointer', borderRadius: '7px' }}
                                                src={`${imageStore}Icons-Autosuggest/AS_Dish_3x`}
                                          />}
                              </Col>
                        </Row>
                  </Container>

            </>
      )
}

export default SubMenuItems