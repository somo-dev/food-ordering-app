import { Button, Divider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import veg from '../assets/images/veg.png';
import nonVeg from '../assets/images/nonVeg.png';
import '../component_styles/restaurantMenu.scss';
import AdditionalMenuOptionsModal from './AdditionalMenuOptionsModal';
import RatingStarsSection from './RatingStarsSection';
import VegClassifierIcon from './VegClassifierIcon';

const SubMenuItems = ({ subMenuItems }: any) => {
      const [currentFoodItemInfo, setcurrentFoodItemInfo] = useState<any>({});
      const [showModal, setShowModal] = useState<boolean>(false);
      const modalHandler = () => {
            setcurrentFoodItemInfo({
                  id: subMenuItems?.card?.info?.id,
                  title: subMenuItems?.card?.info?.name,
                  price: subMenuItems?.card?.info?.price,
                  itemAttribute: subMenuItems?.card?.info?.itemAttribute,
                  addons: subMenuItems?.card?.info?.addons,
                  variants: subMenuItems?.card?.info?.variantsV2
            })
            setShowModal(!showModal);

      }
      return (
            <>
                  <Container>
                        <Divider />
                        <Row className='my-5'>
                              <Col xs={8} className='d-flex pl-4'>
                                    <div>
                                          <VegClassifierIcon itemAttribute={subMenuItems?.card?.info?.itemAttribute} className='mb-2' />
                                          <Typography className='mb-2'><b>{subMenuItems?.card?.info?.name}</b></Typography>
                                          {subMenuItems?.card?.info?.price && <Typography className='mb-2'><b>₹ {subMenuItems?.card?.info?.price / 100}</b></Typography>}
                                          {!subMenuItems?.card?.info?.price && <Typography className='mb-2'>Click Add and check price after customization</Typography>}
                                          <Typography className='mb-2'>{subMenuItems?.card?.info?.description}</Typography>
                                          <RatingStarsSection
                                                rating={parseFloat(subMenuItems?.card?.info?.ratings?.aggregatedRating?.rating)}
                                                noOfRatings={subMenuItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} />
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
                                    <Button onClick={modalHandler} variant="contained" disableElevation sx={{ color: '#00AF73', backgroundColor: 'white', border: 1, height: '30px', width: '80px' }} className={!subMenuItems?.card?.info?.imageId ? 'add-items-button_with-no-image' : 'add-items-button'}>
                                          <b>Add</b>
                                    </Button>
                              </Col>
                        </Row>
                        {subMenuItems?.card?.info?.addons?.length && <AdditionalMenuOptionsModal
                              id={currentFoodItemInfo.id}     //where there are addon options in the  menu
                              title={currentFoodItemInfo.title}
                              price={currentFoodItemInfo.price}
                              itemAttribute={currentFoodItemInfo.itemAttribute}
                              addons={currentFoodItemInfo.addons}
                              variants={currentFoodItemInfo.variants}
                              show={showModal}
                              onHide={() => setShowModal(false)} />}
                        {!subMenuItems?.card?.info?.addons?.length && <AdditionalMenuOptionsModal  //where there are no addon options
                              id={currentFoodItemInfo.id}     //where there are addon options in the  menu
                              title={currentFoodItemInfo.title}                                     // we need to add directly to cart
                              itemAttribute={currentFoodItemInfo.itemAttribute}
                              addons={currentFoodItemInfo.addons}
                              variants={currentFoodItemInfo.variants}
                              show={showModal}
                              onHide={() => setShowModal(false)} />}
                  </Container>

            </>
      )
}

export default SubMenuItems