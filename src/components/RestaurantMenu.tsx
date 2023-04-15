import React, { useEffect } from 'react'
import '../component_styles/restaurantMenu.scss'
import RestaurantMenuHeader from '../shared/RestaurantMenuHeader'
import { Container, Row } from 'react-bootstrap'
import { foodOptionsDetails } from '../assets/data/restaurantFoodOptionsScreen'
import { useParams } from 'react-router-dom'
import { Divider } from '@mui/material'
import OffersSection from '../shared/OffersSection'
import Menu from './Menu'
const RestaurantMenu = () => {
      const { restId } = useParams();
      // useEffect(()=> {
      //       if(foodOptionsDetails.menuAndOtherDetails.info.uuid === restId){
      //             const restaurantMenu =  foodOptionsDetails.menuAndOtherDetails.info;
      //       }
      // }, []);
      return (<div className='menu-page mx-auto'>
            {foodOptionsDetails?.filter((foodOptions: any) => {
                  return (foodOptions?.info?.uuid === restId);
            }).map((foodOptions: any, index: number) => {
                  return (
                        <section key={index} className='menu-page'>
                              <Row className='px-5 pt-5 pb-4'>
                                    <RestaurantMenuHeader info={foodOptions?.info} />
                              </Row>
                        </section>
                  )
            })
            }
            <Divider variant="middle" sx={{ borderStyle: 'dashed' }} />
            {foodOptionsDetails?.filter((foodOptions: any) => {
                  return (foodOptions?.info?.uuid === restId);
            }).map((foodOptions: any, index: number) => {
                  return (
                        <section key={index} className='menu-page'>
                              <Row className='px-5 pt-4 pb-2'>
                                    <OffersSection offerCategory={foodOptions?.offerCategory} />
                              </Row>
                        </section>
                  )
            })
            }
            <Divider variant="middle" />
            <Container>
                  {foodOptionsDetails?.filter((foodOptions: any) => {
                        return (foodOptions?.info?.uuid === restId);
                  }).map((foodOptions: any, index: number) => {
                        return (
                              <section key={index} className='menu-page'>
                                    <Row className='px-5 pt-4 pb-4'>
                                          <Menu menuCategory={foodOptions?.menu} />
                                    </Row>
                              </section>
                        )
                  })
                  }
            </Container>
      </div>
      )
}

export default RestaurantMenu