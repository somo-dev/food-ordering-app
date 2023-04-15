import React from 'react'
import { Col } from 'react-bootstrap';
import RatingCard from './RatingCard';
import EnceptionNotifier from './EnceptionNotifier';

const RestaurantMenuHeader = ({ info }: any) => {
      return (<>
            <Col sm={12} md={6} lg={6} xl={6}>
                  <h4>{info?.name}</h4>
                  <div className='d-flex'>
                        {info?.cuisines?.map((cuisine: string) => {
                              let comma = ',';
                              if (info?.cuisines?.indexOf(cuisine) === info.cuisines?.length - 1) {
                                    comma = ''
                              } else {
                                    comma = ',';
                              }
                              return (
                                    <span className='mr-1' key={cuisine}>{`${cuisine}${comma}`}</span>
                              )
                        })}
                  </div>
                  <div className='d-flex'>
                        <span>{info?.areaName}, &nbsp;</span>
                        <span>{info?.sla?.lastMileTravelString}</span>
                  </div>
            </Col>
            <Col className='d-flex justify-content-end' sm={12} md={6} lg={6} xl={6}>
                  <RatingCard rating= {info?.avgRating} totalRatings= {info?.totalRatingsString} />
            </Col>
            <Col className='d-flex' sm={12} md={12} lg={12} xl={12}>
                  <EnceptionNotifier message= {info?.feeDetails?.message} />
            </Col>
      </>
      )
}

export default RestaurantMenuHeader