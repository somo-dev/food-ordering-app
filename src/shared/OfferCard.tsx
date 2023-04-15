import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react'
import { Image } from 'semantic-ui-react';
import { imageStore } from '../assets/data/constants';

const OfferCard = ({ offer }: any) => {
      const card = (
            <>
                  <CardContent className='mx-auto'>
                        <div className='d-flex justify-content-center align-items-center text-success'>
                              <Image className='mr-2'
                                    draggable={false}
                                    style={{ width: '20px', height: '20px', cursor: 'pointer', borderRadius: '5px' }}
                                    src={`${imageStore}${offer?.info?.offerLogo}`}
                              />
                              <Typography sx={{ fontSize: 13 }} className='pl-2 pr-1 my-auto' gutterBottom>
                                    {offer?.info?.header}
                              </Typography>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                              <Typography sx={{ fontSize: 12, fontFamily: 'monospace' }} color="text.secondary" className='pt-2' gutterBottom>
                                    {offer?.info?.couponCode} | {offer?.info?.description}
                              </Typography>
                        </div>
                  </CardContent>
            </>
      );
      return (
            <span>
                  <Box sx={{ width: 250, height: 80 }}>
                        <Card variant="outlined" className='' sx={{ borderRadius: 2 }}>{card}</Card>
                  </Box>
            </span>
      )
}

export default OfferCard