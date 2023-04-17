import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import veg from '../assets/images/veg.png';
import nonVeg from '../assets/images/nonVeg.png';
import '../component_styles/restaurantMenu.scss';

const SubMenuItems = ({ subMenuItems }: any) => {
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
                                          <Typography className='mb-2'><b>₹ {subMenuItems?.card?.info?.price / 100}</b></Typography>
                                          <Typography className='mb-2'>{subMenuItems?.card?.info?.description}</Typography>
                                    </div>
                              </Col>
                              <Col xs={4} className='d-flex justify-content-end align-items-center pr-5'>
                                    {subMenuItems?.card?.info?.imageId &&
                                          <Image
                                                draggable={false}
                                                style={{ maxWidth: '130px', height: '130px', cursor: 'pointer', borderRadius: '7px' }}
                                                src={`${imageStore}${subMenuItems?.card?.info?.imageId}`}
                                          />}
                                    {!subMenuItems?.card?.info?.imageId &&
                                          <Image
                                                draggable={false}
                                                style={{ maxWidth: '130px', height: '120px', cursor: 'pointer', borderRadius: '7px' }}
                                                src={`${imageStore}Icons-Autosuggest/AS_Dish_3x`}
                                          />}
                              </Col>
                              <Col xs={12} className='d-flex justify-content-end align-items-center pr-5'>
                                    <Button variant="contained" disableElevation sx={{ color: '#00AF73', backgroundColor: 'white', border: 1, height: '30px', width: '80px' }} className={!subMenuItems?.card?.info?.imageId? 'add-items-button_with-no-image': 'add-items-button'}>
                                          <b>Add</b>
                                    </Button>
                              </Col>
                        </Row>
                  </Container>

            </>
      )
}

export default SubMenuItems