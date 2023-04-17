import React from 'react'
import { Image } from 'semantic-ui-react';
import veg from '../assets/images/veg.png';
import nonVeg from '../assets/images/nonVeg.png';

const VegClassifierIcon = ({ itemAttribute, ...props }: any) => {
      return (
            <>
                  {itemAttribute?.vegClassifier &&
                        <Image
                              className={`${props.className}`}
                              draggable={false}
                              style={{ width: '20px', height: '20px' }}
                              src={itemAttribute?.vegClassifier === 'VEG' ? veg : nonVeg}
                        />}
                  {!itemAttribute?.vegClassifier &&
                        <Image
                              className={`${props.className}`}
                              draggable={false}
                              style={{ width: '17px', height: '17px' }}
                              src={props?.isVeg ? veg : nonVeg}
                        />}
            </>
      )
}

export default VegClassifierIcon