import { Rating } from '@mui/material'
import React from 'react'

const RatingStarsSection = ({rating, noOfRatings}: any) => {
      return (
            <span className='d-flex align-items-center'>
                  <Rating className='mr-1' name="size-large" defaultValue={rating} precision={0.5} readOnly size="large" />
                  <span className='text-warning rating-text mr-2'>{rating}</span>
                  <span className='rating-text'>({noOfRatings})</span>
            </span>
      )
}

export default RatingStarsSection