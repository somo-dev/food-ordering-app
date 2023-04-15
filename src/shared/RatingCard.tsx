import { Box, Card, CardContent, Divider, Typography } from '@mui/material'
import React from 'react'

const RatingCard = ({ rating, totalRatings }: any) => {
      const card = (
            <>
                  <CardContent className='mx-auto'>
                        <div className='d-flex justify-content-center align-items-center text-success'>
                              <Typography sx={{ fontSize: 24 }} className='my-auto' gutterBottom>
                                    ★
                              </Typography>
                              <Typography sx={{ fontSize: 18 }} className='pl-2 pr-1 my-auto' gutterBottom>
                                    {rating}
                              </Typography>
                        </div>

                        <Divider />
                        <div className='d-flex justify-content-center align-items-center'>
                              <Typography sx={{ fontSize: 11 }} color="text.secondary" className='pt-2' gutterBottom>
                                    {totalRatings}
                              </Typography>
                        </div>
                  </CardContent>
            </>
      );
      return (
            <span>
                  <Box sx={{ width: 100, height: 100 }}>
                        <Card variant="outlined" sx={{ borderRadius: 2 }}>{card}</Card>
                  </Box>
            </span>
      )
}

export default RatingCard