import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import SubMenuItems from './SubMenuItems';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../component_styles/restaurantMenu.scss';
import RatingStarsSection from './RatingStarsSection';
import AdditionalMenuOptionsModal from './AdditionalMenuOptionsModal';
import VegClassifierIcon from './VegClassifierIcon';

const MenuItems = ({ menuItems, ...props }: any) => {
  const [expanded, setExpanded] = useState<string | false>('Recommended');
  const [currentFoodItemInfo, setcurrentFoodItemInfo] = useState<any>({});
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const modalHandler = () => {
    setcurrentFoodItemInfo({
      id: menuItems?.card?.info?.id,
      title: menuItems?.card?.info?.name,
      price: (menuItems?.card?.info?.addons || menuItems?.card?.info?.variantsV2?.variantGroups) ? menuItems?.card?.info?.price : menuItems?.card?.info?.price / 100,
      itemAttribute: menuItems?.card?.info?.itemAttribute,
      addons: menuItems?.card?.info?.addons ? menuItems?.card?.info?.addons : "",
      variants: menuItems?.card?.info?.variantsV2?.variantGroups ? menuItems?.card?.info?.variantsV2 : ""
    })
    console.log(currentFoodItemInfo);
    setShowModal(!showModal);

  }
  return (<>
    {menuItems?.card &&
      <Container>
        <Row className='my-5'>
          <Col xs={6} md={8} className='d-flex pl-4'>
            <div>
              <VegClassifierIcon itemAttribute={menuItems?.card?.info?.itemAttribute} className='mb-2' />
              <Typography className='mb-2'><b>{menuItems?.card?.info?.name}</b></Typography>
              {menuItems?.card?.info?.price && <Typography className='mb-2'><b>₹ {menuItems?.card?.info?.price / 100}</b></Typography>}
              {!menuItems?.card?.info?.price && <Typography className='mb-2'>Click Add and check price after customization</Typography>}
              <Typography className='mb-2'>{menuItems?.card?.info?.description}</Typography>
              <RatingStarsSection
                rating={parseFloat(menuItems?.card?.info?.ratings?.aggregatedRating?.rating)}
                noOfRatings={menuItems?.card?.info?.ratings?.aggregatedRating?.ratingCountV2} />
            </div>
          </Col>
          <Col xs={6} md={4} className='d-flex justify-content-end align-items-center pr-5'>
            {menuItems?.card?.info?.imageId &&
              <Image
                draggable={false}
                style={{ width: '140px', height: '145px', cursor: 'pointer', borderRadius: '7px' }}
                src={`${imageStore}${menuItems?.card?.info?.imageId}`}
              />}
            {!menuItems?.card?.info?.imageId && menuItems?.card &&
              <Image
                draggable={false}
                style={{ width: '130px', height: '145px', cursor: 'pointer', borderRadius: '7px' }}
                src={`${imageStore}Icons-Autosuggest/AS_Dish_3x`}
              />}
          </Col>
          <Col xs={12} className='d-flex justify-content-end align-items-center pr-5'>
            <Button onClick={modalHandler} variant="contained" disableElevation sx={{ color: '#00AF73', backgroundColor: 'white', border: 1, height: '30px', width: '80px' }} className='add-items-button'>
              <b>Add</b>
            </Button>
          </Col>
        </Row>
        <Divider />
        {menuItems?.card?.info?.addons && <AdditionalMenuOptionsModal
          id={currentFoodItemInfo.id}     //where there are addon options in the  menu
          title={currentFoodItemInfo.title}
          price={currentFoodItemInfo.price}
          itemAttribute={currentFoodItemInfo.itemAttribute}
          addons={currentFoodItemInfo.addons}
          variants={currentFoodItemInfo.variants}
          show={showModal}
          onHide={() => setShowModal(false)} />}
        {menuItems?.card?.info?.variantsV2?.variantGroups?.length && <AdditionalMenuOptionsModal
          id={currentFoodItemInfo.id}     //where there are variations options in the  menu
          title={currentFoodItemInfo.title}
          price={currentFoodItemInfo.price}
          itemAttribute={currentFoodItemInfo.itemAttribute}
          addons={currentFoodItemInfo.addons}
          variants={currentFoodItemInfo.variants}
          show={showModal}
          onHide={() => setShowModal(false)} />}
        {/* {!menuItems?.card?.info?.addons?.length &&   //where there are no addon options
          setcurrentFoodItemInfo({
            id: menuItems?.card?.info?.id,
            title: menuItems?.card?.info?.name,
            price: menuItems?.card?.info?.price,
            itemAttribute: menuItems?.card?.info?.itemAttribute,
          })} */}
      </Container>
    }
    {                                           //for those accordions that have sub-menu items
      !menuItems?.card &&
      <Col xs={12}>
        <div>
          <Accordion className="mb-3" onChange={handleChange(menuItems?.title)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id={menuItems?.title}>
              <Typography className='mr-2'><b>{menuItems?.title}</b></Typography>
              <Typography> <b>({menuItems?.itemCards?.length})</b></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                {menuItems?.itemCards?.map((menuCategoryItem: any, index: number) => {
                  return (
                    <SubMenuItems key={index} subMenuItems={menuCategoryItem} />
                  )
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      </Col>}
  </>
  )
}

export default MenuItems