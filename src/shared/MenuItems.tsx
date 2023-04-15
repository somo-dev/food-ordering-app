import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';
import veg from '../assets/images/veg.png';
import nonVeg from '../assets/images/nonVeg.png';
import SubMenuItems from './SubMenuItems';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../component_styles/restaurantMenu.scss';

const MenuItems = ({ menuItems }: any) => {
  const effectivePrice = menuItems?.card?.info?.price / 100;
  const [expanded, setExpanded] = React.useState<string | false>('Recommended');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (<>
    {menuItems?.card &&
      <Container>
        <Row className='my-5'>
          <Col xs={6} md={8} className='d-flex pl-4'>
            <div>
              <Image
                className='mb-2'
                draggable={false}
                style={{ width: '20px', height: '20px' }}
                src={menuItems?.card?.info?.itemAttribute?.vegClassifier === 'VEG' ? veg : nonVeg}
              />
              <Typography className='mb-2'><b>{menuItems?.card?.info?.name}</b></Typography>
              <Typography className='mb-2'><b>₹ {effectivePrice}</b></Typography>
              <Typography className='mb-2'>{menuItems?.card?.info?.description}</Typography>
            </div>
          </Col>
          <Col xs={6} md={4} className='d-flex justify-content-end align-items-center pr-5'>
            {menuItems?.card?.info?.imageId &&
              <Image
                draggable={false}
                style={{ width: '130px', height: '110px', cursor: 'pointer', borderRadius: '7px' }}
                src={`${imageStore}${menuItems?.card?.info?.imageId}`}
              />}
            {!menuItems?.card?.info?.imageId && menuItems?.card &&
              <Image
                draggable={false}
                style={{ maxWidth: '130px', cursor: 'pointer', borderRadius: '7px' }}
                src={`${imageStore}Icons-Autosuggest/AS_Dish_3x`}
              />}
          </Col>
          <Col xs={12} className='d-flex justify-content-end align-items-center pr-5'>
            <Button variant="contained" disableElevation sx={{ color: '#00AF73', backgroundColor: 'white', border: 1, height: '30px', width: '80px' }} className='add-items-button'>
              <b>Add</b>
            </Button>
          </Col>
        </Row>
        <Divider />
      </Container>
    }
    {
      !menuItems?.card &&
      <Col xs={12}>
        <div>
          <Accordion className="mb-3" onChange={handleChange(menuItems?.title)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} id={menuItems?.title}>
              <Typography>{menuItems?.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>

                {menuItems?.itemCards?.map((menuCategoryItem: any, index: number) => {
                  console.log(menuCategoryItem);
                  return (
                    <SubMenuItems key={index} subMenuItems={menuCategoryItem} />
                  )
                })}
              </Typography>
            </AccordionDetails>
          </Accordion>

        </div>
      </Col>
    }
  </>
  )
}

export default MenuItems